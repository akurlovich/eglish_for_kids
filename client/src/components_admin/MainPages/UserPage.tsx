import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import BurgerMenu from '../../components/BurgerMenu';
import CardField from '../../components/CardField';
import Header from '../../components/Header';
import LosePage from '../../components/LosePage';
import MainPage from '../../components/MainPage';
import WinPage from '../../components/WinPage';
import { IMenuReducer } from '../../redux/mainReducer';

const UserPage: FC = () => {
  const pageNow = useSelector((state: IMenuReducer) => state.page);
  
  return (
    <div className='wrapper'>
      <div className='main__container'>
        <Header/>
        {pageNow === 10 && <MainPage />}
        <BurgerMenu/>
        {pageNow === 0 && <CardField arrNumber={pageNow} pageName={`mainPage ${pageNow}`}/>}
        {pageNow === 1 && <CardField arrNumber={pageNow} pageName={`mainPage ${pageNow}`}/>}
        {pageNow === 2 && <CardField arrNumber={pageNow} pageName={`mainPage ${pageNow}`}/>}
        {pageNow === 3 && <CardField arrNumber={pageNow} pageName={`mainPage ${pageNow}`}/>}
        {pageNow === 4 && <CardField arrNumber={pageNow} pageName={`mainPage ${pageNow}`}/>}
        {pageNow === 5 && <CardField arrNumber={pageNow} pageName={`mainPage ${pageNow}`}/>}
        {pageNow === 6 && <CardField arrNumber={pageNow} pageName={`mainPage ${pageNow}`}/>}
        {pageNow === 7 && <CardField arrNumber={pageNow} pageName={`mainPage ${pageNow}`}/>}

        {pageNow === 11 && <WinPage/>}
        {pageNow === 12 && <LosePage/>}
        
      </div>
    </div>
  );
};

export default UserPage;