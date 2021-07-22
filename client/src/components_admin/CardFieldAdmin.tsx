import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IMenuReducer } from '../redux/mainReducer';
import model, { DataType } from '../model';
import CardAdmin from './CardAdmin';
import CardCreateAdmin from './CardCrateAdmin';
import CreateCategory from './CreateCategory';
import WordsAdmin from './WordsAdmin';

export interface ICardItem {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
}

const CardFieldAdmin: FC = () => {

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
  const chooseCreateCategory = () => {
    setshowCreateCategory(!showCreateCategory)
  }

  const showwords = false;

  return (
    <div>
      <div className='card_field'>
        {getCategory.map((item, index) => 
          <CardAdmin key={item._id} categoryItems={item} onChangeCat={addNewCat}/>
        )}
        {showCreateCategory && <CreateCategory onChangeCat={addNewCat} chooseCreateCategory={chooseCreateCategory}/>}
        <CardCreateAdmin chooseCreateCategory={chooseCreateCategory} />
        {showwords && (categoryWords.words.map((item, index) => 
          <WordsAdmin key={item._id} categoryItems={item} onChangeCat={addNewCat}/>
        ))} 
      </div>
    </div>
  );
};

export default CardFieldAdmin;
