import React, { useState, useEffect } from "react";
// import fetchPhoto from "../../services/fetchPhoto";

const apiKey = "api_key=Jr3NMgrEUirC5Yb18je6auQ5c8aUF3Lo9u4dqueO"
const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}`;

const Photo = () => {
    const [ photoData, setPhotoData ] = useState("");

    try {
    fetch(apiUrl).then(response => response.json())
        .then(response => {
            setPhotoData(response);
        })
    } catch(e) {
        console.log(e);
    }
    const { url, title, date, explanation } = photoData;

    return (
        <div>
            {title}
        <img src={`${url}`} alt={title}/>
        </div>
    )
}

export default Photo;