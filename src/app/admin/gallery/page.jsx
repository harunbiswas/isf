"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/gallery") // Fetch data from the gallery API
      .then((response) => {
        setGallery(response.data);
      })
      .catch((e) => {
        console.error(e);
        setError("Failed to fetch gallery images");
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/gallery`, {
        params: { id }, // Passing the image ID as a query parameter
      });

      if (response.status === 200) {
        setSuccess("Image deleted successfully.");
        setGallery((prevGallery) =>
          prevGallery.filter((image) => image._id !== id)
        );
      } else {
        setError("Failed to delete the image.");
      }
    } catch (err) {
      setError(`Error: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div className="offer gallery">
      <h1>Gallery</h1>
      {error && <span className="error">{error}</span>}
      {success && <span className="success">{success}</span>}

      <div className="gallery-wrp offer-wrp">
        {gallery?.map((item, i) => (
          <div key={i} className="offer-item">
            <button
              onClick={() => handleDelete(item?._id)}
              className="delete btn"
            >
              <MdDelete />
            </button>
            <div className="img">
              <Image
                src={item?.image} // Use the image URL from the gallery
                width={300}
                height={200}
                alt={`Gallery image ${i + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
