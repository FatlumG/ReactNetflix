import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">Movie Name</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My list</button>
        </div>
        <h1 className="banner-description">
          {truncate(
            `This is a description This is a descriptionThis is a description This is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a description`,
            150
          )}
        </h1>

        <div className="banner-fadeBottom" />
      </div>
    </header>
  );
}

export default Banner;
