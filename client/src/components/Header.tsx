import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMenuReducer, actionType } from '../redux/mainReducer';
import BurgerMenu from './BurgerMenu';
import Switch from './Switch';
import startBtn from '../assets/starg_btn.png'
import starImg from '../assets/star.png'

// interface IHederProps {
//   onAdd: (num: number) => void;
// }

const Header: FC = () => {
  const dispatch = useDispatch();
  // const winCount = useSelector((state: IMenuReducer) => state.winCard);
  // const menuOpen = useSelector<IMenuReducer>(state => state.menuOpen);
  // console.log('menu', menuOpen);
  
  const addCash = () => {
    // console.log(cash);
    dispatch({
      type: 'OPEN',
      payload: 4
    })
  }

  const removeCash = () => {
    dispatch({
      type: 'CLOSE',
      payload: 3
    })
  }

  const addHandler = () => {
    dispatch({
      type: actionType.switchMenu,
    })
  }



  const starsArr: string[] = useSelector((state: IMenuReducer) => state.starsArr);
  const pageNow = useSelector<IMenuReducer>(state => state.page);
  const [starsState, setstarsState] = useState<string[]>([]);

  const addStar = (imgSrc: string) => {
    // dispatch({
    //   type: actionType.addStar,
    //   addItems: imgSrc,
    // })
    // // starsArr.push(imgSrc);
    // console.log(starsArr);
    // setstarsState((prev) => ({
    //       ...prev,
    //       starsState: starsArr,
    //     }));
    dispatch({
      type: actionType.addWinCount,
      payload: 2,
    })
  }

  // useEffect(() => {
  //   setstarsState((prev) => ({
  //     ...prev,
  //     starsState: '',
  //   }));

  // useEffect(() => {
  //   setstarsState((prev) => ({
  //     ...prev,
  //     starsState: ''
  //   }))
  // })


  return (
    <div className='header' >
      {/* <button onClick={addHandler}>1111111111111</button> */}
      {/* {/* <button onClick={addCash}>redux{cash}</button> */}
      {/* <button onClick={removeCash}>redux{cash}</button>  */}
      <div onClick={addHandler} className="header-burger">
          <div className="line-first"></div>
          <div className="line-second"></div>
          <div className="line-third"></div>
      </div>
      {/* <div className='start_btn'><img src={startBtn} alt="" /></div> */}
      {/* <h1>{winCount}</h1> */}
      {/* <BurgerMenu onShowMenu={headerShowMenu}/> */}
      {/* <BurgerMenu/> */}
      <Switch />
    </div>
  );
};

export default Header;