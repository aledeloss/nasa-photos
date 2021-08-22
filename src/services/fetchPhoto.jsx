//   const [photoData, setPhotoData] = useState('')
export const FetchPhoto = () => {
  const randomDate = () => {
    const randomYear = Math.floor(Math.random() * 26 + 1996) // update to current year and check that
    const randomMonth = Math.floor(Math.random() * 12 + 1)
    const randomDay = Math.floor(Math.random() * (randomMonth === 2 ? 28 : (randomMonth === (4 || 6 || 9 || 11) ? 30 : 31)))
    console.log({ randomYear, randomMonth, randomDay })

    return ({ randomYear, randomMonth, randomDay })
  }
  const { randomYear, randomMonth, randomDay } = randomDate()

  const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}&date=${randomYear}-${randomMonth}-${randomDay}`

  try {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        const photoData = response
      })
    console.log('yeah')
  } catch (e) {
    console.log('ups')
  }

  return photoData
}
