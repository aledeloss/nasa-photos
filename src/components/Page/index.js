import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Photo from '../Photo'
import Menu from '../Menu'
import styled from 'styled-components'

const apiKey = 'api_key=Jr3NMgrEUirC5Yb18je6auQ5c8aUF3Lo9u4dqueO'

const StyledPageTitle = styled.div`
  font-size: 1.5em;
`
const StyledPage = styled.div`
  height: 100%;
  padding: 2vw 2vw 1vw 2vw;
  min-height: 100vh;
  background-color: #e0e0e0;
  a {
    text-decoration: none;
    color: black;
  }
`
const StyledFooter = styled.div`
  width: 100%;
  position: static;
  bottom: 30px;
  margin-top: .5em;
`

const Page = () => {
  const { fecha } = useParams()
  const [photoData, setPhotoData] = useState('')
  const [shareableLink, setShareableLink] = useState('')
  const [newPhoto, setNewPhoto] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const randomDate = () => {
    let randomYear = Math.floor(Math.random() * 26 + 1996) // update to current year
    let randomMonth = Math.floor(Math.random() * 12 + 1)
    let randomDay = Math.floor(Math.random() * (randomMonth === 2 ? 28 : (randomMonth === (4 || 6 || 9 || 11) ? 30 : 31)) + 1)
    if (fecha) {
      randomYear = fecha.slice(-10, -6)
      randomMonth = fecha.slice(-5, -3)
      randomDay = fecha.slice(-2)
    }
    return { randomYear, randomMonth, randomDay }
  }

  useEffect(() => {
    try {
      setPhotoData('')
      setIsLoading(true)
      const { randomYear, randomMonth, randomDay } = randomDate()
      const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}&date=${randomYear}-${randomMonth}-${randomDay}`
      fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
          setPhotoData(response)
          setShareableLink(`https://nasa-photos-eosin.vercel.app/fecha/${randomYear}-${randomMonth < 10 ? '0' + randomMonth : randomMonth}-${randomDay < 10 ? '0' + randomDay : randomDay}`)
          if (response.code === 400) setNewPhoto(!newPhoto)
        })
      setIsLoading(false)
      window.scrollTo(0, 0)
    } catch (e) {
      console.log(e)
      setNewPhoto(!newPhoto)
    }
  }, [newPhoto])

  const { hdurl, title, date, explanation } = photoData

  const toDataURL = (url) => {
    return fetch('https://apod.nasa.gov/apod/image/0103/goddardrocket_orig_big.jpg', { mode: 'no-cors' }).then((response) => {
      return response.blob()
    }).then(blob => {
      return URL.createObjectURL(blob)
    })
  }
  const download = async (hdurl) => {
    // const element = document.createElement('a')
    // const file = new Blob(
    //   [hdurl
    //   ],
    //   { type: 'image' }
    // )
    // element.href = URL.createObjectURL(file)
    // element.download = 'image.jpg'
    // element.click()
    console.log('hello')
    const a = document.createElement('a')
    a.href = await toDataURL(hdurl)
    a.download = 'myImage.jpg'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    // await fetch({
    //   url: hdurl,
    //   method: 'GET',
    //   responseType: 'blob'
    // })
    //   .then((response) => {
    //     const url = window.URL
    //       .createObjectURL(new Blob([response], { type: 'image//jpge' }))
    //     const link = document.createElement('a')
    //     link.href = url
    //     link.setAttribute('download', 'image.jpg')
    //     document.body.appendChild(link)
    //     link.click()
    //   })
  }

  return (
      <StyledPage className='App'>
        <StyledPageTitle>RANDOM NASA PIC OF THE DAY</StyledPageTitle>
      {isLoading ? <div>Loading image</div> : <Photo hdurl={hdurl} title={title} date={date} explanation={explanation} />}
      <Menu link={shareableLink} handleChangePic={() => setNewPhoto(!newPhoto)} handleDownload={() => download(hdurl)}/>
      <StyledFooter>Made by <a href="https://github.com/aledeloss" target="_blank" rel="noreferrer">Ale DeLos</a></StyledFooter>
      </StyledPage>
  )
}

export default Page
