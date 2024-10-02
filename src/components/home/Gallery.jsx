"use client";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { id: 1, src: "/images/food/D8N_1792.jpg", alt: "Image 1" },
    { id: 2, src: "/images/food/D8N_1794.jpg", alt: "Image 2" },
    { id: 3, src: "/images/food/D8N_1784.jpg", alt: "Image 3" },
    { id: 4, src: "/images/food/D8N_1783.jpg", alt: "Image 4" },
    { id: 5, src: "/images/food/D8N_1774.jpg", alt: "Image 5" },
    { id: 6, src: "/images/food/D8N_1794.jpg", alt: "Image 6" },
  ];

  return (
    <div id="gallery" className="gallery">
      <div className="container">
        <h2 className="title">Photo Gallery</h2>
        {/* Image Grid */}
        <div className="grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gridItem"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="image"
              />
            </div>
          ))}
        </div>

        {/* Modal for viewing selected image */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modalContent">
              <span className="close" onClick={() => setSelectedImage(null)}>
                &times;
              </span>
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={800}
                height={600}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
