import React, { useState, useEffect } from 'react'
import './App.css'
import Photo from './coponents/Photo'
import Menu from './coponents/Menu'

const apiKey = 'api_key=Jr3NMgrEUirC5Yb18je6auQ5c8aUF3Lo9u4dqueO'

function App () {
  const [photoData, setPhotoData] = useState('')

  const randomDate = () => {
    const randomYear = Math.floor(Math.random() * 26 + 1996) // update to current year and check that
    const randomMonth = Math.floor(Math.random() * 12 + 1)
    const randomDay = Math.floor(Math.random() * (randomMonth === 2 ? 28 : (randomMonth === (4 || 6 || 9 || 11) ? 30 : 31)))
    console.log({ randomYear, randomMonth, randomDay })

    return ({ randomYear, randomMonth, randomDay })
  }
  const { randomYear, randomMonth, randomDay } = randomDate()

  const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}&date=${randomYear}-${randomMonth}-${randomDay}`

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
    <div className="App">
      <h1>NASA PIC OF THE DAY</h1>
      <Photo hdurl={hdurl} title={title} date={date} explanation={explanation} />
      <Menu link={apiUrl}/>
    </div>
  )
}

export default App
