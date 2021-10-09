import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPhotoTitle = styled.div`
  margin-top: 0.5em;
  font-size: 1.5em;
`

const StyledExplanation = styled.div`
  margin-bottom: 0.5em;
`
const StyledPhoto = styled.img`
    max-width: 100%;
    border: solid 2px;
    margin-top: 25px;
    margin-bottom: 2%;
    border: solid white 5px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Photo = ({ hdurl, title, date, explanation }) => {
  return (
    <div>
      <StyledPhotoTitle>{title}</StyledPhotoTitle>
      <StyledPhoto loading="lazy" src={`${hdurl}`} alt={title} />
      <StyledExplanation>{explanation}</StyledExplanation>
      <div>Date: {date}</div>
    </div>
  )
}

Photo.propTypes = {
  hdurl: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  explanation: PropTypes.string
}

export default Photo
