import React, { useState, useEffect } from "react";
// import fetchPhoto from "../../services/fetchPhoto";

const apiKey = "api_key=Jr3NMgrEUirC5Yb18je6auQ5c8aUF3Lo9u4dqueO"
const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}`;

const Photo = () => {
    const [ photoUrl, setPhotoUrl ] = useState("");

    fetch(apiUrl).then(response => response.json())
        .then(response => {
            const { url } = response;
            setPhotoUrl(url);
        })

    console.log(photoUrl)

    // const [ photo, setPhoto ] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     const {url} = fetchPhoto()
    //     console.log(url)
    //     setLoading(false)
    // }, [])
        

    return (
        <div>
        <img src={`${photoUrl}`} alt="esto es el alt"/>
        </div>
    )
}

export default Photo;