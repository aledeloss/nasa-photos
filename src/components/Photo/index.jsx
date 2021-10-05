import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPhotoTitle = styled.div`
  font-size: 1.5em;
`
const StyledPhoto = styled.img`
    max-width: 100%;
    border: solid 2px;
    margin-top: 25px;
    margin-bottom: 2%;
`

const Photo = ({ hdurl, title, date, explanation }) => {
  return (
    <div>
      <StyledPhotoTitle>{title}</StyledPhotoTitle>
      <StyledPhoto src={`${hdurl}`} alt={title} />
      <div>{explanation}</div>
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
