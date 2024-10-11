import dbConnect from '@/lib/dbConnect'; // Your MongoDB connection function
import Catagori from '@/models/Catagori';

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
  
  const newCatagori = await Catagori.create({title, image: relativeFilePath, lng}) 
    return NextResponse.json({ message: 'File uploaded successfully',newCatagori });

  } catch (error) {

    return NextResponse.json({ error: 'File upload failed', details: error.message }, { status: 500 });
  }
}


export async function GET(request) {
  try{
    await dbConnect();
    const result = await Catagori.find()
    return NextResponse.json(result);
  }catch(err){
    console.log(err)
    return NextResponse.json({ error: 'Intental server errors', details: err.message }, { status: 500 });
  }
}


export async function DELETE(request) {
  try {
    await dbConnect();

    // Extract the Catagori ID from the query string (assuming the ID is passed as a query parameter)
    const { searchParams } = new URL(request.url);
    const catagoriId = searchParams.get('id');

    if (!catagoriId) {
      return NextResponse.json({ error: 'No Catagori ID provided' }, { status: 400 });
    }

    // Find the Catagori in the database by ID
    const catagori = await Catagori.findById(catagoriId);
    
    if (!catagori) {
      return NextResponse.json({ error: 'Catagori not found' }, { status: 404 });
    }

    // Get the file path to the image and delete it from the filesystem
    const filePath = join(process.cwd(), '/public', catagori.image);
    
    // Attempt to remove the file (catch error if file does not exist)
    try {
      await unlink(filePath);
    } catch (err) {
      console.warn('File not found, skipping file deletion:', err.message);
    }

    // Delete the Catagori from the database
    await Catagori.findByIdAndDelete(catagoriId);

    return NextResponse.json({ message: 'Catagori deleted successfully' }, { status: 200 });

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to delete Catagori', details: error.message }, { status: 500 });
  }
}