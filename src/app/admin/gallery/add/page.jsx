"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddGallery() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError("An image is required");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("file", image); // Append the image

    try {
      const response = await axios.post("/api/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type
        },
      });

      if (response.status === 200) {
        router.push("/admin/gallery");
      } else {
        console.error("Upload failed:", response.data);
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setError("Error uploading image");
    }
  };

  return (
    <div className="offer-add gallery-add">
      <h1>Add Photo</h1>
      <form className="form" onSubmit={handleSubmit}>
        {error && <span className="error">{error}</span>}

        <div className="form-group">
          <label htmlFor="file">Upload photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])} // Capture file input
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
