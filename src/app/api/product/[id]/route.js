import dbConnect from '@/lib/dbConnect'; // Your MongoDB connection function
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await dbConnect();

    // Extract the Product ID from the URL params
    const { id } = params;

    // Fetch the single product by ID
    const product = await Product.findById(id);

    // If the product is not found, return a 404 error
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Return the product details
    return NextResponse.json(product);

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Internal server error', details: err.message }, { status: 500 });
  }
}
