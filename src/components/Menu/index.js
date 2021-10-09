import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMenu = styled.div`
  margin-top: 1vw;
  margin-bottom: 1vw;
  border: none;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center
`

const StyledButton = styled.button`
  background-color: pink;
  width: 80px;
  height: 30px;
  diaplay: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
  border-radius: 10px;
  padding: 2px;
  margin: 5px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1.5;
  }
  &:active {
    transform: scale(1.05)
  }
`

const StyledTooltip = styled.div`
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  transition: opacity 0.3s;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }
    & ${StyledButton}:hover {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    border-radius: 4px;
  `

const Menu = ({ link, handleChangePic, handleDownload }) => {
  const buttons = [
    {
      label: 'Copy Link',
      icon: 'share',
      action: () => navigator.clipboard.writeText(link)
    },
    {
      label: 'Change',
      icon: 'change',
      action: handleChangePic
    }
    // {
    //   label: 'Download',
    //   icon: 'download',
    //   action: handleDownload
    // }
  ]
  return (
        <StyledMenu>
            {buttons.map((button) => {
              return (
                <div key={button.label}>
                  <StyledTooltip>Tooltip text</StyledTooltip>
                  <StyledButton key={button.label} onClick={button.action}>
                    {button.label}
                  </StyledButton>
                </div>
              )
            })}
        </StyledMenu>
  )
}

Menu.propTypes = {
  link: PropTypes.string,
  handleChangePic: PropTypes.func,
  handleDownload: PropTypes.func
}

export default Menu
