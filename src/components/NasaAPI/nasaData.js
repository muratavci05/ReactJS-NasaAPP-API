import React, { useState, useEffect } from "react";
import "../style/style.css";

const NasaData = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const api_Key = "XiSafrU5DQRwEf2j2SPbdK34W8IiGX56m7DzGFoR";

      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_Key}`
      );

      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <React.Fragment>
      <div className="container">
        <div className="containerMain">
          <img
            className="containerAPIimg"
            src={photoData.url}
            alt={photoData.data}
          />
        </div>
        <div className="explanationInfo">
          <h1 className="hd">{photoData.title}</h1>
          <h3 className="dt">{photoData.date}</h3>
          <p className="desc">{photoData.explanation}</p>
          <h6 className="lnk">{photoData.hdurl}</h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NasaData;
