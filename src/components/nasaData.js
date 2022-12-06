import React,{useState,useEffect} from "react";


const NasaData = () =>{

const [photoData, setPhotoData]=useState(null);


useEffect(()=>{
    fetchPhoto();
    async function fetchPhoto(){
        const res = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=Djvk0izcCaS7jkIWmRyhXx01lm7fLOvXnWdVoG5O`
            
        );

        
        const data = await res.json();
        setPhotoData(data);
        console.log(data)
    }
},[]);

if (!photoData) return <div/>;



    return(
        <React.Fragment>
            <div>
                <img src={photoData.url} 
                alt={photoData.data}
                />
            </div>
            <h1>{photoData.title}</h1>
            <h3>{photoData.date}</h3>
            <p>{photoData.explanation}</p>
            <h6>{photoData.hdurl}</h6>
        </React.Fragment>
    )
}

export default NasaData;