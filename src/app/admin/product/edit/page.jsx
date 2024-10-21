"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [lng, setLng] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [existingImage, setExistingImage] = useState(null); // New state for existing image

  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id"); // Get the product ID from the URL

  // Fetch product details when the page loads
  useEffect(() => {
    if (productId) {
      axios
        .get(`/api/product/${productId}`)
        .then((response) => {
          const product = response.data;

          setTitle(product.title);
          setLng(product.lng);
          setCategory(product.catagori);
          setDescription(product.discription);
          setPrice(product.price);
          setExistingImage(product.image); // Store the existing image URL
        })
        .catch((error) => {
          console.error("Failed to fetch product details:", error);
        });
    }

    // Fetch available categories
    axios
      .get("/api/catagori")
      .then((d) => {
        setCategories(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      (!image && !existingImage) ||
      !lng ||
      !category ||
      !description ||
      !price
    ) {
      setError("All fields are required");
      return;
    }

    // Prepare form data for updating the product
    const formData = new FormData();
    formData.append("title", title);
    if (image) formData.append("file", image); // Append new file only if selected
    formData.append("lng", lng);
    formData.append("catagori", category);
    formData.append("discription", description);
    formData.append("price", price);

    try {
      const response = await axios.put(
        `/api/product?id=${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        router.push("/admin/product");
      } else {
        console.error("Update failed:", response.data);
        alert("Failed to update product");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setError("Error updating product");
    }
  };

  return (
    <div className="offer-edit offer-add">
      <h1>Edit Product</h1>
      <form className="form" onSubmit={handleSubmit}>
        {error && <span className="error">{error}</span>}

        <div className="form-group">
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            placeholder="Product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Product Image</label>
          {existingImage && (
            <div className="existing-image">
              <p>Current Image:</p>
              <img
                src={existingImage}
                alt="Current Product"
                style={{ maxWidth: "200px" }}
              />
            </div>
          )}
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
            checked={lng === "en"}
            onChange={(e) => setLng(e.target.value)}
          />
          <label htmlFor="lng-en">EN</label>
        </div>

        <div className="form-radio">
          <input
            value="th"
            name="lng"
            type="radio"
            checked={lng === "th"}
            onChange={(e) => setLng(e.target.value)}
          />
          <label htmlFor="lng-th">TH</label>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select one --</option>
            {categories?.map(
              (item, i) =>
                item?.lng === lng && (
                  <option key={i} value={item?.title}>
                    {item?.title}
                  </option>
                )
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="disc">Product Description</label>
          <textarea
            id="disc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
          />
        </div>

        <button type="submit" className="btn">
          Update Product
        </button>
      </form>
    </div>
  );
}
