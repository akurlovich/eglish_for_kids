import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IMenuReducer } from '../../redux/mainReducer';
import CardFieldAdmin from '../CardFieldAdmin';
import HeaderAdmin from '../HeaderAdmin';
import LoginPage from '../LoginPage';

const AdminPage: FC = () => {
  const loginPage = useSelector<IMenuReducer>(state => state.loginShow);
  return (
    <div className='wrapper'>
      <div className='main__container'>
        {!loginPage && <LoginPage/>}
        <HeaderAdmin/>
        <CardFieldAdmin/>
      </div>
    </div>
  );
};

export default AdminPage;