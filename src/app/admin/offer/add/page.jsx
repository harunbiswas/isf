"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddOffer() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [lng, setLng] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (title && image && lng) {
      setError("");
      return;
    }
  }, [title, image, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image || !lng) {
      setError("All filed is required");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", image); // Append the file (image)
    formData.append("lng", lng); // Append the language

    try {
      const response = await axios.post("/api/offer", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type
        },
      });

      if (response.status === 200) {
        router.push("/admin/offer");
      } else {
        console.error("Upload failed:", response.data);
        alert("Failed to upload offer");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setError("Error uploading offer");
    }
  };

  return (
    <div className="offer-add">
      <h1>Add Offer</h1>
      <form className="form" onSubmit={handleSubmit}>
        {error && <span className="error">{error}</span>}
        <div className="form-group">
          <label htmlFor="title">Offer Title</label>
          <input
            type="text"
            placeholder="offer title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Capture title input
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Offer Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])} // Capture file input
          />
        </div>
        <strong>Language</strong>
        <div className="form-radio">
          <input
            value="en"
            name="lng"
            type="radio"
            onChange={(e) => setLng(e.target.value)} // Capture language
          />
          <label htmlFor="lng-en">EN</label>
        </div>

        <div className="form-radio">
          <input
            value="th"
            name="lng"
            type="radio"
            onChange={(e) => setLng(e.target.value)} // Capture language
          />
          <label htmlFor="lng-th">TH</label>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
