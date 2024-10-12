import dbConnect from '@/lib/dbConnect'; // Your MongoDB connection function
import Gallery from '@/models/Gallery';
import { unlink, writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { join } from 'path';

// POST: Upload image to gallery
export async function POST(request) {
  try {
    await dbConnect();
    
    // Parse multipart/form-data request
    const formData = await request.formData();
    const file = formData.get('file');

    // Check if a file is uploaded
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Convert file to buffer and save it
    const buffer = Buffer.from(await file.arrayBuffer());
    const relativeFilePath = `/uploads/gallery/${file.name}`;
    const filePath = join(process.cwd(), '/public/uploads/gallery/', file.name);

    // Write the file to the 'uploads/gallery' directory
    await writeFile(filePath, buffer);

    // Save the file path to the database
    const newGalleryImage = await Gallery.create({ image: relativeFilePath });

    return NextResponse.json({ message: 'Image uploaded successfully', newGalleryImage }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Image upload failed', details: error.message }, { status: 500 });
  }
}

// GET: Fetch all gallery images
export async function GET(request) {
  try {
    await dbConnect();
    const galleryImages = await Gallery.find();

    return NextResponse.json(galleryImages, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch images', details: error.message }, { status: 500 });
  }
}

// DELETE: Delete a gallery image
export async function DELETE(request) {
  try {
    await dbConnect();

    // Extract the image ID from the query string (assuming the ID is passed as a query parameter)
    const { searchParams } = new URL(request.url);
    const imageId = searchParams.get('id');

    if (!imageId) {
      return NextResponse.json({ error: 'No image ID provided' }, { status: 400 });
    }

    // Find the image in the database by ID
    const image = await Gallery.findById(imageId);

    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    // Get the file path to the image and delete it from the filesystem
    const filePath = join(process.cwd(), '/public', image.image);
    
    try {
      await unlink(filePath);
    } catch (err) {
      console.warn('File not found, skipping file deletion:', err.message);
    }

    // Delete the image from the database
    await Gallery.findByIdAndDelete(imageId);

    return NextResponse.json({ message: 'Image deleted successfully' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete image', details: error.message }, { status: 500 });
  }
}
