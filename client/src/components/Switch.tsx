import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISetMenu } from '../App';
import { actionType, IMenuReducer } from '../redux/mainReducer';
import startBtn from '../assets/starg_btn.png';
import resumeBtn from '../assets/reseme_btn.png';
import { ICardItem } from './CardField';
import cards from '../cards';
import model from '../model';

const Switch = () => {
  const pageNow = useSelector((state: IMenuReducer) => state.page);
  const startGameBtn = useSelector((state: IMenuReducer) => state.startBtn);
  const switchGame = useSelector((state: IMenuReducer) => state.switchGameMode);
  const startGame = useSelector<IMenuReducer>((state: IMenuReducer) => state.startGame);
  const resumeGame = useSelector<IMenuReducer>((state: IMenuReducer) => state.resumeGame);
  const curSound = useSelector((state: IMenuReducer) => state.currentAudio);
  // const curArr = useSelector<IMenuReducer>((state: IMenuReducer) => state.currentAudio);


  const myCardsArr: ICardItem[][] = cards;

  // const [showStartBtn, setshowStartBtn] = useState<boolean>(false);

  // const menuOpen = useSelector<IMenuReducer>(state => state.menuOpen);

  const dispatch = useDispatch();

  // const showStore = () => {
  //   console.log('cash', cash);
  //   console.log('menu open', menuOpen);
  // }

  // const [menu, setMenu] = useState<ISetMenu>({menu: false});

  const switchMode = () => {
    
    // setMenu((prev) => ({
    //   ...prev,
    //   menu: !menu.menu,
    // }))
    dispatch({
      type: actionType.gameMode,
    });
    dispatch({
      type: actionType.startBtn,
    });
    if (resumeGame) {
      dispatch({
        type: actionType.resumeGame
      });
      if (!startGameBtn) {
        console.log(1111);
        dispatch({
          type: actionType.startBtn,
        });
      }
    };

    // if (switchGame) {
    //   if (startGameBtn) {
    //     console.log(1111);
    //     dispatch({
    //       type: actionType.startBtn,
    //     });
    //   }
    // }
  };
  const startGameMode = () => {
    dispatch({
      type: actionType.startGame,
    });
    dispatch({
      type: actionType.resumeGame
    });
    dispatch({
      type: actionType.startBtn,
    });

    // setshowStartBtn(!showStartBtn);
    // dispatch({
    //   type: actionType.
    // })
    console.log(myCardsArr[pageNow])
    let newarr: ICardItem[] = [];
    for (let i = 0; i < 8; i++) {
      newarr.push(myCardsArr[pageNow][i])
    }
    model.shuffle(newarr)
    model.playSound(newarr[0].audioSrc)
    console.log((newarr[0].audioSrc));
    dispatch({
      type: actionType.currentAudio,
      addItems: newarr[0].audioSrc,
    })
    dispatch({
      type: actionType.currentArray,
      payloadCurrentArray: newarr,
    })
    // console.log(curSound);
    // console.log(model.shuffle(myCardsArr[0]))
    // console.log(model.shuffle(myCardsArr[0]))
    // const newarr = model.shuffle(myCardsArr[0])
    console.log(newarr);
    // model.shuffle(myCardsArr[0])
    
  }
  const resumeGameMode = () => {
    // setshowStartBtn(!showStartBtn);
    // dispatch({
    //   type: actionType.resumeGame
    // });
    console.log(curSound);
    model.playSound(curSound)
  }
  
  return (
    <div className='header_start_btn'>
      {startGameBtn &&
      <div className='start_btn' onClick={startGameMode}><img className='start_btn-img' src={startBtn} alt="" /></div>
      }
      {resumeGame &&
        <div className='start_btn' onClick={resumeGameMode}><img className='start_btn-img' src={resumeBtn} alt="" /></div>
      }
      {/* defaultChecked={switchGame} */}
      {pageNow !== 10 && 
      <div className="switch">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label onClick={switchMode} htmlFor="checkbox" className={switchGame ? 'checkbox-label right_label' : 'checkbox-label'}></label>
        <span className={switchGame ? 'train none' : 'train'}>Train</span> 
        <span className={switchGame ? 'play' : 'play none'}>Play</span>
        <span className="switch-bg"></span>
      </div>}
    </div>
    );
};

export default Switch;