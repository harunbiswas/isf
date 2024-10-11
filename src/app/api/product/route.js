import Product from '@/components/home/Product';
import dbConnect from '@/lib/dbConnect'; // Your MongoDB connection function
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { join } from 'path';


export async function POST(request) {
  try {
    await dbConnect();
    // Parse multipart/form-data request
    const formData = await request.formData();
 
    const file = formData.get('file');
    const title = formData.get('title');
    const lng = formData.get('lng');
    const discription = formData.get('discription');
    const catagori = formData.get('catagori');
    const price = formData.get('price');

    // Check if a file is uploaded
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Convert file to buffer and save it
    const buffer = Buffer.from(await file.arrayBuffer());
    const relativeFilePath = `/uploads/image/${file.name}`;
    const filePath = join(process.cwd(), '/public/uploads/image/', file.name);

    // Write the file to the 'uploads' directory
    await writeFile(filePath, buffer);
  
  const newProduct = await Product.create({title, image: relativeFilePath, lng, discription, catagori, price}) 
    return NextResponse.json({ message: 'File uploaded successfully',newProduct });

  } catch (error) {

    return NextResponse.json({ error: 'File upload failed', details: error.message }, { status: 500 });
  }
}


export async function GET(request) {
  try{
    await dbConnect();
    const result = await Product.find()
    return NextResponse.json(result);
  }catch(err){
    console.log(err)
    return NextResponse.json({ error: 'Intental server errors', details: err.message }, { status: 500 });
  }
}


export async function DELETE(request) {
  try {
    await dbConnect();

    // Extract the Product ID from the query string (assuming the ID is passed as a query parameter)
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('id');

    if (!productId) {
      return NextResponse.json({ error: 'No product ID provided' }, { status: 400 });
    }

    // Find the product in the database by ID
    const product = await Product.findById(productId);
    
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Get the file path to the image and delete it from the filesystem
    const filePath = join(process.cwd(), '/public', product.image);
    
    // Attempt to remove the file (catch error if file does not exist)
    try {
      await unlink(filePath);
    } catch (err) {
      console.warn('File not found, skipping file deletion:', err.message);
    }

    // Delete the Porduct from the database
    await Product.findByIdAndDelete(productId);

    return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete Product', details: error.message }, { status: 500 });
  }
}



export async function PUT(request) {
    try {
      await dbConnect();
  
      // Extract the Product ID from the query string (assuming the ID is passed as a query parameter)
      const { searchParams } = new URL(request.url);
      const productId = searchParams.get('id');
  
      if (!productId) {
        return NextResponse.json({ error: 'No product ID provided' }, { status: 400 });
      }
  
      // Find the product in the database by ID
      const product = await Product.findById(productId);
  
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
  
      // Parse multipart/form-data request
      const formData = await request.formData();
      const file = formData.get('file');
      const title = formData.get('title') || product.title;
      const lng = formData.get('lng') || product.lng;
      const description = formData.get('description') || product.description;
      const category = formData.get('category') || product.category;
      const price = formData.get('price') || product.price;
  
      let relativeFilePath = product.image; // Default to existing image path
  
      // If a new file is uploaded, handle file replacement
      if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        relativeFilePath = `/uploads/image/${file.name}`;
        const filePath = join(process.cwd(), '/public/uploads/image/', file.name);
  
        // Write the new file to the 'uploads' directory
        await writeFile(filePath, buffer);
  
        // Remove the old image file if it exists
        const oldFilePath = join(process.cwd(), '/public', product.image);
        try {
          await unlink(oldFilePath);
        } catch (err) {
          console.warn('Old file not found, skipping deletion:', err.message);
        }
      }
  
      // Update the product with the new values
      product.title = title;
      product.lng = lng;
      product.description = description;
      product.category = category;
      product.price = price;
      product.image = relativeFilePath;
  
      await product.save();
  
      return NextResponse.json({ message: 'Product updated successfully', product }, { status: 200 });
  
    } catch (error) {
      return NextResponse.json({ error: 'Failed to update product', details: error.message }, { status: 500 });
    }
  }