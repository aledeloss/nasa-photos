import styled from 'styled-components';

export const StyledMenu = styled.div`
  margin-top: 3vw;
  margin-bottom: 1vw;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  gap: 1.5em;
`;

export const StyledButton = styled.button`
  width: 12em;
  background-color: transparent;
  color: #82030a;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3.5em;
  margin: 1em;
  /* font-size: 1em; */
  font-weight: 600;
  cursor: pointer;
  border: solid #82030a 3px;
  &:hover {
    background-color: #82030a;
    color: #f8eeee;
  }
  &:active {
    transform: scale(1.05);
  }
`;

export const StyledTooltip = styled.div`
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
    content: '';
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
  }
`;
