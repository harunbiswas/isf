import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { loginValidationRules, validate } from '@/validators/UserValidator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET 


// Helper function to apply the validation rules manually
async function applyValidation(body) {
  
    const req = { body };
  
    // Manually apply the validation rules
    await Promise.all(loginValidationRules().map((rule) => rule.run(req)));
  
    // Check the validation result
  
    return validate(req);
  }

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json(); 
    // Validate request body
    const validation = await applyValidation(body);
    

    if (!validation.isValid) {
     
      return NextResponse.json({ errors: validation.errors }, { status: 400 });
    }

    // Parse the request body
    const { email, password } = body;

    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: '3600h' } // Token will expire in 60 days
    );

    // Return success response with token
    return NextResponse.json({ message: 'Login successful', token }, { status: 200 });

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ message: 'Error logging in', error }, { status: 500 });
  }
}
