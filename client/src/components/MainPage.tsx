import React, { FC } from 'react';
import MainPageCard from './MainPageCard';

const MainPage: FC = () => {
  const pageNameArr = ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Sport', 'Colors'];
  const pageImageArr = ['img/dance.jpg', 'img/play.jpg', 'img/chick.jpg', 'img/frog.jpg', 'img/boot.jpg', 'img/happy.jpg', 'img/swim.jpg', 'img/run.jpg']
  return (
    <div className='card_field'>
      {pageNameArr.map((item, index) => 
      <MainPageCard key={(new Date()).getTime() + index} pageName={item} pageNumber={index} pageImage={pageImageArr[index]}/>
      )}
    </div>
  );
};

export default MainPage;