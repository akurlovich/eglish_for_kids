import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IMenuReducer } from '../../redux/mainReducer';
import HeaderAdmin from '../HeaderAdmin';
import LoginPage from '../LoginPage';
import WordsFieldAdmin from '../WordsFieldAdmin';

const AdminWordsPage: FC = () => {
  const loginPage = useSelector<IMenuReducer>(state => state.loginShow);
  return (
    <div className='wrapper'>
      <div className='main__container'>
        {!loginPage && <LoginPage/>}
        <HeaderAdmin/>
        <WordsFieldAdmin/>
      </div>
    </div>
  );
};

export default AdminWordsPage;