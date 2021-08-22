import React, { useState, useEffect } from 'react'
import Photo from '../Photo'
import Menu from '../Menu'
import styled from 'styled-components'

const apiKey = 'api_key=Jr3NMgrEUirC5Yb18je6auQ5c8aUF3Lo9u4dqueO'
const randomDate = () => {
  const randomYear = Math.floor(Math.random() * 26 + 1996) // update to current year and check that
  const randomMonth = Math.floor(Math.random() * 12 + 1)
  const randomDay = Math.floor(Math.random() * (randomMonth === 2 ? 28 : (randomMonth === (4 || 6 || 9 || 11) ? 30 : 31)) + 1)
  console.log({ randomYear, randomMonth, randomDay })
  return { randomYear, randomMonth, randomDay }
}
const { randomYear, randomMonth, randomDay } = randomDate()

const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}&date=${randomYear}-${randomMonth}-${randomDay}`

const StyledPage = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #e0e0e0;
`

const Page = () => {
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

  const { hdurl, title, date, explanation } = photoData

  return (
      <StyledPage className="App">
      <h3>RANDOM NASA PIC OF THE DAY</h3>
      <Photo hdurl={hdurl} title={title} date={date} explanation={explanation} />
      <Menu link={apiUrl}/>|
      </StyledPage>
  )
}

export default Page
