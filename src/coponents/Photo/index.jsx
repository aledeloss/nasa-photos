import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import fetchPhoto from '../../services/fetchPhoto';

const StyledPhoto = styled.img`
    width: 95vw;
`

// const apiKey = 'api_key=Jr3NMgrEUirC5Yb18je6auQ5c8aUF3Lo9u4dqueO'

const Photo = ({ hdurl, title, date, explanation }) => {
//   const [photoData, setPhotoData] = useState('')

  //   const randomDate = () => {
  //     const randomYear = Math.floor(Math.random() * 26 + 1996) // update to current year and check that
  //     const randomMonth = Math.floor(Math.random() * 12 + 1)
  //     const randomDay = Math.floor(Math.random() * (randomMonth === 2 ? 28 : (randomMonth === (4 || 6 || 9 || 11) ? 30 : 31)))
  //     console.log({ randomYear, randomMonth, randomDay })

  //     return ({ randomYear, randomMonth, randomDay })
  //   }
  //   const { randomYear, randomMonth, randomDay } = randomDate()

  //   const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}&date=${randomYear}-${randomMonth}-${randomDay}`

  //   useEffect(() => {
  //     try {
  //       fetch(apiUrl)
  //         .then((response) => response.json())
  //         .then((response) => {
  //           setPhotoData(response)
  //         })
  //       console.log('yeah')
  //     } catch (e) {
  //       console.log('ups')
  //     }
  //   }, [])

  //   const { hdurl, title, date, explanation } = photoData
  return (
    <div>
      {title}
      <StyledPhoto src={`${hdurl}`} alt={title} />
      <div>Picture date: {date}</div>
      <div>{explanation}</div>
    </div>
  )
}

export default Photo
