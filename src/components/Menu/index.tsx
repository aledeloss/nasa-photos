import React from 'react';
import { StyledButton, StyledMenu, StyledTooltip } from './styles';
import { Button, MenuProps } from './types';

const Menu = ({ link, handleChangePic }: MenuProps) => {
  const buttons: Button[] = [
    {
      label: 'COPY LINK',
      icon: 'share',
      action: () => navigator.clipboard.writeText(link)
    },
    {
      label: 'CHANGE',
      icon: 'change',
      action: handleChangePic
    }
  ];
  return (
    <StyledMenu>
      {buttons.map((button) => {
        return (
          <div key={button.label}>
            <StyledTooltip>Tooltip text</StyledTooltip>
            <StyledButton onClick={button.action}>{button.label}</StyledButton>
          </div>
        );
      })}
    </StyledMenu>
  );
};

export default Menu;
