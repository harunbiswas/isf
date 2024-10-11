import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { userValidationRules, validate } from '@/validators/UserValidator';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';


// Helper function to apply the validation rules manually
async function applyValidation(body) {
  
  const req = { body };

  // Manually apply the validation rules
  await Promise.all(userValidationRules().map((rule) => rule.run(req)));

  // Check the validation result

  return validate(req);
}



// GET: Retrieve all users from the database
export async function GET() {
  await dbConnect();
  const users = await User.find();
  return NextResponse.json(users);
}

// POST: Create a new user in the database with validation
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json(); 
    // Validate request body
    const validation = await applyValidation(body);
    

    if (!validation.isValid) {
     
      return NextResponse.json({ errors: validation.errors }, { status: 400 });
    }
 
    // Create new user after successful validation
   

   
      // Hash the password before storing it in the database
    const saltRounds = 10; // Adjust the cost factor (higher means more security but slower)
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);



  
 
    const newUser = await User.create({
      ...body,
      password: hashedPassword,
    });
    
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 });
  }
}
