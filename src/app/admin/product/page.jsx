"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Offer() {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/product")
      .then((d) => {
        setProducts(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/product`, {
        params: { id }, // Passing the ID as a query parameter
      });

      if (response.status === 200) {
        setSuccess("Offer deleted successfully.");
        setProducts((prevproducts) =>
          prevproducts.filter((product) => product._id !== id)
        );
      } else {
        setError("Failed to delete the product.");
      }
    } catch (err) {
      setError(`Error: ${err.response?.data?.error || err.message}`);
    }
  };
  return (
    <div className="offer">
      <h1>Products</h1>
      {error && <span className="error">{error}</span>}

      <div className="offer-wrp">
        {products?.map((item, i) => (
          <div key={i} className="offer-item">
            <button
              onClick={() => handleDelete(item?._id)}
              className="delete btn"
            >
              <MdDelete />
            </button>
            <div className="img">
              <Image
                src={item?.image}
                width={300}
                height={100}
                alt={item?.name}
              />
            </div>
            <div className="content">
              <h2>
                <b>Title : </b>
                {item?.title}
              </h2>
              <p>
                {" "}
                <b>Language : </b>
                {item?.lng}
              </p>{" "}
              <p>
                {" "}
                <b>catagori : </b>
                {item?.catagori}
              </p>
              <p>
                {" "}
                <b>price : </b>
                {item?.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
