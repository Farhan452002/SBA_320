import React, { useState, useEffect } from "react";

const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY = "live_fcHv1LqVrAvGBtYCkDL1taBjdlqa7hSGyJSkIrLdBIPrnmFgX7VfCDhmdPKzut7s";

const CatDisplay = () => {
  const [catImage, setCatImage] = useState("");

  const fetchCat = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: { "x-api-key": API_KEY }
      });
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="cat-display">
      <h2>Random Cat</h2>
      {catImage && <img src={catImage} alt="Random Cat" className="cat-image" />}
      <button onClick={fetchCat}>Get New Cat</button>
    </div>
  );
};

export default CatDisplay;
