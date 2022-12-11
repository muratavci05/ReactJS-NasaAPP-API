import React from "react";
import "../style/style.css"

const DetailApod = (props) =>{

    return(
        <React.Fragment>
           
      <div className="container">
        <div className="containerMain">
          <img
            className="containerAPIimg"
           // src={photoData.url}
           // alt={photoData.data}
          />
        </div>
        <div className="explanationInfo">
          <h1 className="hd">title</h1>
          <h3 className="dt">date</h3>
          <p className="desc">explanation</p>
          <h6 className="lnk">hdurl</h6>
        </div>
      </div>
    
        </React.Fragment>
    )
}

export default DetailApod;