import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import winImg from '../assets/success.png'
import { actionType } from '../redux/mainReducer';

const WinPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: actionType.resetState,
      })
    }, 4000);
    
  }, [])
  return (
    <div className='card_field cf_df'>
      <h2 className='win_h1'>You Win!!!</h2>
      <img className='win_img' src={winImg} alt="" />
    </div>
  );
};

export default WinPage;