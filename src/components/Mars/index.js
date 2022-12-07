import React,{useState,useEffect} from "react";
import axios from "axios";

const Mars = () => {
const[marsData,setMarsData]=useState([])

    useEffect(()=>{
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
          .then((res)=>{
            console.log("MARS-API-GET-RESPONSE >>:",res.data)
            marsData(res.data)
          })
          .catch((err)=>{
            console.log("MARS-API-GET-ERROR >>:",err)
          })
    
      },[])

      const arr = data.map((data, index)=>{
        return(
            
        )
      })
      

    return(
        <React.Fragment>
            <div>
                <h3>burası mars verileri barındırır</h3>
                <div>
                    <h3>name :</h3>
                    <h3>id :</h3>
                    <h3>earth_date :</h3>
                    <h3>img_src :</h3>
                    <h3>rover_name :  </h3>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Mars;