import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Menu = ({ link }) => {
  const StyledButton = styled.button`
        background-color: pink;
        width: 50px;
        height: 30px;
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
      action: () => console.log('change')
    }
  ]
  return (
        <div>
            {buttons.map((button) => {
              return (
                <StyledButton key={button.label} onClick={button.action}>{button.label}</StyledButton>
              )
            })}
        </div>
  )
}

Menu.propTypes = {
  link: PropTypes.string
}

export default Menu
