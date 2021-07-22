import React, { FC, useEffect, useState } from 'react';
import Card from './CardAdmin';
import cards from '../cards'
import { useDispatch, useSelector } from 'react-redux';
import { actionType, IMenuReducer } from '../redux/mainReducer';
import starImg from '../assets/star.png'
import model, { DataType } from '../model';
import CardAdmin from './CardAdmin';
import CardCreateAdmin from './CardCrateAdmin';
import CreateCategory from './CreateCategory';
import WordCreeateAdmin from './WordCreeateAdmin';
import { getCategories } from '../redux/actions/AllCategories';
import { IServerReducer } from '../redux/serverReducer';
import WordsAdmin from './WordsAdmin';
import WordAddAdmin from './WordAddAdmin';

export interface ICardItem {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
}

const WordsFieldAdmin: FC = () => {

  const categoryWords = useSelector((state: IMenuReducer) => state.categoryID);

  const [getCategory, setGetCategory] = useState<DataType[]>([{name: "name", words: [], _id: 1123}]);
  const [showCreateCategory, setshowCreateCategory] = useState(false)

  useEffect(() => {

    model.getAllCategory<DataType>().then(res => {
      setGetCategory(res);
    })
  }, [])
  

  const addNewCat = (item: DataType) => {
    setGetCategory(prev => [
      ...prev, item
    ])
  }
 
  return (
    <div>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 600,
        textAlign: 'center',
        paddingBottom: '10px',
        }}>
          Category: {categoryWords.name}
      </h1>
      <div className='card_field'>
        {categoryWords.words.map((item, index) => 
          <WordsAdmin key={item._id} categoryItems={item} onChangeCat={addNewCat}/>
        )}
        <WordAddAdmin/>
        <WordCreeateAdmin categoryID={categoryWords._id.toString()}/>
      </div>
    </div>
  );
};

export default WordsFieldAdmin;