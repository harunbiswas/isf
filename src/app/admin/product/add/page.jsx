"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [lng, setLng] = useState("");
  const [description, setDescription] = useState(""); // New state for description
  const [category, setCategory] = useState(""); // New state for category
  const [price, setPrice] = useState(""); // New state for price
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]); // Corrected state name

  const router = useRouter();

  useEffect(() => {
    if (title && image && lng && category && description && price) {
      setError("");
      return;
    }
  }, [title, image, lng, category, description, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image || !lng || !category || !description || !price) {
      setError("All fields are required");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", image); // Append the file (image)
    formData.append("lng", lng); // Append the language
    formData.append("catagori", category); // Append the category
    formData.append("discription", description);
    formData.append("price", price);

    try {
      const response = await axios.post("/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        router.push("/admin/product");
      } else {
        console.error("Upload failed:", response.data);
        alert("Failed to upload product");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setError("Error uploading product");
    }
  };

  useEffect(() => {
    axios
      .get("/api/catagori")
      .then((d) => {
        setCategories(d.data); // Corrected to set categories
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="offer-add">
      <h1>Add Product</h1>
      <form className="form" onSubmit={handleSubmit}>
        {error && <span className="error">{error}</span>}
        <div className="form-group">
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            placeholder="Product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Capture title input
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Product Image</label>
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

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category} // Track selected category
            onChange={(e) => setCategory(e.target.value)} // Update category state
          >
            <option value="">--select one --</option>
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
            step="0.01" // Allow decimals
            placeholder="Product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)} // Capture price input
          />
        </div>

        <div className="form-group">
          <label htmlFor="disc">Product Description</label>
          <textarea
            id="disc"
            value={description} // Track the description
            onChange={(e) => setDescription(e.target.value)} // Update description state
            placeholder="Enter product description"
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
