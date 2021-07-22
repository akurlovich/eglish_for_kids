import React, { FC, useEffect, useState } from 'react';
import Card from './Card';
import cards from '../cards'
import { useDispatch, useSelector } from 'react-redux';
import { actionType, IMenuReducer } from '../redux/mainReducer';
import starImg from '../assets/star.png'
import model from '../model';

export interface ICardItem {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
}

interface ICardFieldProps {
  arrNumber: number;
  pageName: string;
}
// interface ICardsArr {
//   cards: ICardItem[][];
// }

const CardField: FC<ICardFieldProps> = ({arrNumber, pageName}) => {

  const starsArr = useSelector((state: IMenuReducer) => state.starsArr);
  const pageNow = useSelector((state: IMenuReducer) => state.page);
  const switchGame = useSelector<IMenuReducer>(state => state.switchGameMode);
  const dispatch = useDispatch();

  if (switchGame) {
    console.log('play sound')
  }
  

  // const [starsState, setstarsState] = useState<string[]>([]);
  
  // const cardsArr = [0, 1, 2, 3, 4, 5, 6, 7];

  // const myCardsArr: { word: string; translation: string; image: string; audioSrc: string; }[][] = cards;
  const myCardsArr: ICardItem[][] = cards;

  // const res = fetch('/cards.js').then(res => res.json()).then(data => console.log('from json', data))
  // const categories = await res.json();
  // console.log('from json', categories)
  console.log('mycards', myCardsArr);

  // const shuffle = (arr: ICardItem[]) => {
  //   let j: number;
  //   let temp: ICardItem;
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
      
  //   }
  //   // return arr;
  // }

  // shuffle(myCardsArr[arrNumber]);

  const addStar = (imgSrc: string) => {
    dispatch({
      type: actionType.addStar,
      addItems: imgSrc,
    })
    // starsArr.push(imgSrc);
    console.log(starsArr);
  }
  // useEffect(() => {
  //   setstarsState((prev) => ({
  //     ...prev,
  //     starsState: '',
  //   }));
  //   console.log('object', starsState);
    
  // }, [starsArr])

  const resetStore = () => {
    dispatch({
      type: actionType.resetState,
    })
  }

  return (
    <div>
      <h1 onClick={resetStore} className='main_title'>{model.pageNameArr[pageNow]}</h1>
      <div className='stars_div'>
        {starsArr.map((item, index) => 
          <img src={item} alt="" key={(new Date()).getTime() + index} />
        )}
      </div>
      <div className='card_field'>
        {myCardsArr[arrNumber].map((item, index) => 
          <Card key={index} cardItems={myCardsArr[arrNumber][index]} />
        )}
      </div>
    </div>
  );
};

export default CardField;

// export default React.memo(CardField);