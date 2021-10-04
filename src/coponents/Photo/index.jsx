import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPhoto = styled.img`
    width: 95vw;
    border: solid 2px;
    margin-top: 25px;
`

const Photo = ({ hdurl, title, date, explanation }) => {
  return (
    <div>
      {title}
      <StyledPhoto src={`${hdurl}`} alt={title} />
      <div>Date: {date}</div>
      <div>{explanation}</div>
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
