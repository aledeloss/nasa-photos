import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Menu = ({ link, handleChangePic }) => {
  const StyledButton = styled.button`
        background-color: pink;
        width: 50px;
        height: 30px;
        diaplay: flex;
        justify-content: center;
        border: none;
        border-radius: 10px;
        padding: 2px;
        margin: 5px;
        &:hover {
          opacity: 0.7;
        }
    `

  const StyledTooltip = styled.p`
    visibility: hidden;
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
    opacity: 0;
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
  const buttons = [
    {
      label: 'share',
      icon: 'share',
      action: () => navigator.clipboard.writeText(link)
    },
    {
      label: 'change',
      icon: 'change',
      action: handleChangePic
    }
  ]
  return (
        <div>
            {buttons.map((button) => {
              return (
                <StyledButton key={button.label} onClick={button.action}>
                  {button.label}
                  <StyledTooltip>Tooltip text</StyledTooltip>
                </StyledButton>
              )
            })}
        </div>
  )
}

Menu.propTypes = {
  link: PropTypes.string,
  handleChangePic: PropTypes.func
}

export default Menu
