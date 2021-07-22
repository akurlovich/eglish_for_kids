import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loseImg from '../assets/oops2.png'
import { actionType, IMenuReducer } from '../redux/mainReducer';

const LosePage: FC = () => {
  const loseCount = useSelector((state: IMenuReducer) => state.loseCard);
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
      <h2 className='win_h1'>You have {loseCount} mistake!!!</h2>
      <img className='win_img' src={loseImg} alt="" />
    </div>
  );
};

export default LosePage;