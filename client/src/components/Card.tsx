import React, { FC, useState } from 'react';
import switchImg from '../assets/arrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { actionType, IMenuReducer } from '../redux/mainReducer';
import classnames from 'classnames';
import model from '../model';
import { ICardItem } from './CardField';
import starRightImg from '../assets/star.png';
import starWrongImg from '../assets/star_wrong.png';


interface IToggleImage {
  toggle: boolean
}

// interface ICardProps {
//   imgUrl: string;
// }

interface ICardProps {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
}

interface ICardProperty {
  cardItems: ICardProps;
}

const Card: FC<ICardProperty> = ({cardItems}) => {

  // const playSound = (url: string) => {
  //   const soundKey = new Audio();
  //   soundKey.src = url;
  //   soundKey.currentTime = 0;
  //   soundKey.play();
  // };
  const dispatch = useDispatch();
  const switchGame = useSelector<IMenuReducer>(state => state.switchGameMode);
  const curSound = useSelector((state: IMenuReducer) => state.currentAudio);
  const curArr: ICardItem[] = useSelector((state: IMenuReducer) => state.currentArray);
  const winCount = useSelector((state: IMenuReducer) => state.winCard);
  const loseCount = useSelector((state: IMenuReducer) => state.loseCard);

  const imgClasses = classnames('img-card', {'img_play_mode': switchGame});
  const descriptionClasses = classnames('description', {'none': switchGame});


  // const { wordEng as word, translationRus, imageUrl, audioSrc} = cardItems;

  // console.log(wordEnglish, translationRus, imageUrl, audioSrc)

  const [toggle, setToggle] = useState<IToggleImage>({toggle: true});
  const [rightCard, setRightCard] = useState<IToggleImage>({toggle: false});

  const toggleImage = () => {
    setToggle({toggle: !toggle.toggle})
  };

  const mouseLeaveCard = (event: React.MouseEvent<HTMLDivElement>) => {
    // console.log('mouse leave');
    if (toggle.toggle) {
      return;
    } else {
      setToggle({toggle: !toggle.toggle});
    }
  };

  // const dispatch = useDispatch();
  // const addStar = (imgSrc: string) => {
  //   dispatch({
  //     type: actionType.addStar,
  //     addItems: imgSrc,
  //   })
  // }
  const playWord = () => {
    // addStar(starImg)
    if (!switchGame) {
      model.playSound(cardItems.audioSrc);
      return;
    }
    // else return;
    // console.log('sound', cardItems.audioSrc);
    
    if (cardItems.audioSrc === curSound) {
      console.log('win');
      model.playSound('./yes.mp3')
      setRightCard({toggle: !rightCard.toggle})
      dispatch({
        type: actionType.addStar,
        addItems: starRightImg,
      });
      if (winCount === 8) {
        if (loseCount > 0) {
          dispatch({
            type: actionType.pageNumber,
            payload: 12,
          });
          return;
        } else {
            dispatch({
              type: actionType.pageNumber,
              payload: 11,
            });
            return;
        }
      }
      dispatch({
        type: actionType.addWinCount,
      })

      console.log('win count', winCount)

      model.playSound(curArr[winCount].audioSrc)
      console.log('sound next', curArr[winCount].audioSrc);

      
      dispatch({
        type: actionType.currentAudio,
        addItems: curArr[winCount].audioSrc,
      })
    } else {
      console.log('lose');
      model.playSound('./oops.mp3');
      model.playSound(curSound);
      dispatch({
        type: actionType.addLoseCount,
      })
      dispatch({
        type: actionType.addStar,
        addItems: starWrongImg,
      });
    }
  }

  return (
    <div onMouseLeave={mouseLeaveCard} onClick={playWord} className={rightCard.toggle === true ? 'card right_card' : 'card'}>
      <div className={toggle.toggle === false ? 'front front-rotate' : 'front'}>
      {/* className={classnames('some-class', { 'change-class': show })} */}
        {/* <div className="img-card" style={{backgroundImage: `url(${cardImg})`}}></div> */}
        {/* <div className="img-card" style={{backgroundImage: 'url(./bird.jpg)'}}></div> */}
        {/* <div className="img-card" style={{backgroundImage: "url(/img/chicken.jpg)"}}></div> */}
        <div className={imgClasses} style={{backgroundImage: `url(/${cardItems.image})`}}></div>
        <div className={descriptionClasses}>
          <div className="description-string">
            <div className="description-title">{cardItems.word}</div>
            <div className="roll-button">
              <img onClick={toggleImage} src={switchImg} alt="" className="arrow"/>
            </div>
            </div>
            <div className="description-string">
              <div className="condition-wrapper">
                {/* <div className="condition"></div> */}
              </div>
            </div>
          </div>
        </div>
      <div className={toggle.toggle === false ? 'back back-rotate' : 'back'}>
        <div className={imgClasses} style={{backgroundImage: `url(/${cardItems.image})`}}></div>
        <div className={descriptionClasses}>
          <div className="description-string">
            <div className="description-title">{cardItems.translation}</div>
          </div>
          <div className="description-string">
            <div className="condition-wrapper">
              {/* <div className="condition"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;