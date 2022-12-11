import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "antd";

const Mars = (props) => {
  const [apod, setApod] = useState([]);

  //nasa apod api
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
      <div className="container bg-dark" >
        <div className="row row-cols-6 row-cols-md-4 g-3 bg-dark">
          {apod.map((item, index) => {
            return (
              <div key={index} className="col bg-dark">
                <div className="card shadow-sm bg-dark">

                  <div className="Image bg-dark" style={{marginLeft:"80px"}}>
                    <Image className="bg-dark" 
                    width={150} height={150} src={item.hdurl} />
                  </div>

                  <div className="MarsText" style={{marginLeft:"80px"}}>
                    <h4 className="copyright">copyright: {item.copyright}</h4>
                    <h4 className="title">
                      <span>*</span>
                      {item.title}
                    </h4>
                    <div className="btn-group">
                  <button type="button" 
                  className="btn btn-secondary btn-sm" 
                  data-bs-toggle="modal" 
                  data-bs-target="#staticBackdrop">
                View</button>
                </div>
              
                    {/* <p className="explanation">{item.explanation}</p> */}
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
