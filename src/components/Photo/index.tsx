import React from 'react';
import { StyledExplanation, StyledPhoto, StyledPhotoTitle } from './styles';

interface PhotoProps {
  hdurl?: string,
  date?: string,
  title?: string,
  explanation?: string
};

const Photo = ({ hdurl, title, date, explanation }: PhotoProps) => {
  return (
    <div>
      <StyledPhotoTitle>{title}</StyledPhotoTitle>
      <StyledPhoto loading="lazy" src={`${hdurl}`} alt={title} />
      <StyledExplanation>{explanation}</StyledExplanation>
      <div>Date: {date}</div>
    </div>
  );
};

export default Photo;
