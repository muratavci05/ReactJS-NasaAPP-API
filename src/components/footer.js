import React, { useEffect, useState } from "react";


const Footer =()=>{
    const [picData,setPicdata]=useState(null);

    useEffect(() =>{
        fetchPicture();
        async function fetchPicture(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEY`
            );

            const data = await res.json();
            setPicdata(data);
            console.log(data);
        }

    },[]);

    
    return(
        <React.Fragment>
          
        </React.Fragment>
    )
}

export default Footer;