"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Offer() {
  const [offers, setOffers] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/offer")
      .then((d) => {
        setOffers(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/offer`, {
        params: { id }, // Passing the ID as a query parameter
      });

      if (response.status === 200) {
        setSuccess("Offer deleted successfully.");
        setOffers((prevOffers) =>
          prevOffers.filter((offer) => offer._id !== id)
        );
      } else {
        setError("Failed to delete the offer.");
      }
    } catch (err) {
      setError(`Error: ${err.response?.data?.error || err.message}`);
    }
  };
  return (
    <div className="offer">
      <h1>Offers</h1>
      {error && <span className="error">{error}</span>}

      <div className="offer-wrp">
        {offers?.map((item, i) => (
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
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
