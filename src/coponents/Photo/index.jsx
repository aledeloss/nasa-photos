import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import fetchPhoto from '../../services/fetchPhoto';

const StyledPhoto = styled.div`
    border: solid 2px red;
`

const apiKey = 'api_key=Jr3NMgrEUirC5Yb18je6auQ5c8aUF3Lo9u4dqueO'
const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}`

const Photo = () => {
  const [photoData, setPhotoData] = useState('')
  useEffect(() => {
    try {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
          setPhotoData(response)
        })
      console.log('yeah')
    } catch (e) {
      console.log('ups')
    }
  }, [])

  const { url, title, date, explanation } = photoData
  return (
    <div>
      {title}
      <StyledPhoto>
      <img src={`${url}`} alt={title} />
      </StyledPhoto>
    </div>
  )
}

export default Photo
