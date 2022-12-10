import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "antd";

const Mars = (props) => {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    const count = 20;
    const apiKey = "QEqJuF17YEpNksxMBoIn16iJS67hKVicRUrfEq0m";
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`
      )
      .then((res) => {
        console.log("MarsAPP Res>>", res.data);
        setApod(res.data);
      })
      .catch((err) => {
        console.log("hata mesajı", err);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row row-cols-6 row-cols-sm-2 row-cols-md-1 g-3">
          {apod.map((item, index) => {
            return (
              <div key={index} className="col">
                <div className="card shadow-sm d-flex flex-row">
                  <div className="Image">
                    <Image width={150} height={150} src={item.hdurl} />
                  </div>
                  <div className="MarsText">
                    <h4 className="copyright">{item.copyright}</h4>
                    <h4 className="title">
                      <span>*</span>
                      {item.title}
                    </h4>
                    <p className="explanation">{item.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mars;
