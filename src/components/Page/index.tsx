import React, { useState } from 'react';
import Photo from '../Photo';
import Menu from '../Menu';
import useGetPhotoData from '../../hooks/useGetPhotoData';
import { StyledFooter, StyledPage, StyledPageTitle } from './styles';

const Page = () => {
  const [newPhoto, setNewPhoto] = useState(false);
  const { photoData, shareableLink, isLoading } = useGetPhotoData(newPhoto, setNewPhoto);
  const { hdurl, title, date, explanation } = { ...photoData };

  return (
    <StyledPage className='App'>
      <StyledPageTitle>RANDOM NASA PIC OF THE DAY</StyledPageTitle>
      {isLoading
        ? (
          <div>Loading image</div>
          )
        : (
          <Photo
            hdurl={hdurl}
            title={title}
            date={date}
            explanation={explanation}
          />
          )}
      <Menu
        link={shareableLink}
        handleChangePic={() => setNewPhoto(!newPhoto)}
      />
      <StyledFooter>
        Made by{' '}
        <a href='https://github.com/aledeloss' target='_blank' rel='noreferrer'>
          Ale DeLos
        </a>
      </StyledFooter>
    </StyledPage>
  );
};

export default Page;
