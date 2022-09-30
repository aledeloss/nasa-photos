import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'api_key=Jr3NMgrEUirC5Yb18je6auQ5c8aUF3Lo9u4dqueO';

export type Photo = {
     hdurl: string;
     title: string;
     date: string;
     explanation: string;
};

const useGetPhotoData = (newPhoto: boolean, setNewPhoto: (arg: boolean) => void) => {
  const { fecha } = useParams <{ fecha: string }>();
  const [photoData, setPhotoData] = useState<Photo | null>(null);
  const [shareableLink, setShareableLink] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const randomDate = () => {
      let randomYear = Math.floor(Math.random() * 26 + 1997); // update to current year
      let randomMonth = Math.floor(Math.random() * 12 + 1);
      let randomDay = Math.floor(
        Math.random() *
             (randomMonth === 2
               ? 28
               : (randomMonth === (4 || 6 || 9 || 11) ? 30 : 31) + 1)
      );
      if (fecha) {
        randomYear = Number(fecha.slice(-10, -6));
        randomMonth = Number(fecha.slice(-5, -3));
        randomDay = Number(fecha.slice(-2));
      }
      return { randomYear, randomMonth, randomDay };
    };
    try {
      const { randomYear, randomMonth, randomDay } = randomDate();
      const apiUrl = `https://api.nasa.gov/planetary/apod?${API_KEY}&date=${randomYear}-${randomMonth}-${randomDay}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
          const { hdurl, title, date, explanation } = response;
          setPhotoData({ hdurl, title, date, explanation });
          setShareableLink(
      `https://nasa-photos-eosin.vercel.app/fecha/${randomYear}-${
       randomMonth < 10 ? '0' + randomMonth : randomMonth
      }-${randomDay < 10 ? '0' + randomDay : randomDay}`
          );
          if (response.code === 400) setNewPhoto(!newPhoto);
        });
      setIsLoading(false);
      window.scrollTo(0, 0);
    } catch (e) {
      console.log(e);
      setNewPhoto(!newPhoto);
    }
  }, [newPhoto]);

  return { photoData, shareableLink, isLoading };
};

export default useGetPhotoData;
