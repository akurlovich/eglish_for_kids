import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import model, { DataType } from '../../model';
import { actionType } from '../../redux/mainReducer';

interface ICategoryProps {
  categoryItems: DataType;
  onChangeCat: (item: DataType) => void;
}

const BaseCard: FC<ICategoryProps> = ({categoryItems, onChangeCat}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputName, setIntupName] = useState<string>('');
  const [showUpdate, setShowUpdate] = useState(true);
  const [wordsCount, setWordsCount] = useState(0)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntupName(event.target.value)
  }
  const handlerDeleteCategory = async () => {
    await model.deleteCategory(categoryItems._id.toString());
  }
  const updateBtnHandler = () => {
    setShowUpdate(!showUpdate);
    setIntupName(categoryItems.name)
  }
  const createBtnHandler = async () => {
    const res = await model.addCategory<DataType>(inputName);
    onChangeCat(res);
    setShowUpdate(!showUpdate);
  }
  const addWordBtnHandler = () => {
    model.getOneCategory<DataType>(categoryItems._id.toString()).then(res => {
      dispatch({
        type: actionType.categoryID,
        categoryData: res,
      })
      history.push('/words')
    })
  }
  useEffect(() => {
    model.getOneCategory<DataType>(categoryItems._id.toString()).then(res => {
      setWordsCount(res.words.length);
    })
  }, []);
  
  return (
    <>
      <div className={showUpdate ? 'front front_admin' : 'none'}>
        <img onClick={handlerDeleteCategory} className='admin_close' src="./close.png" alt="" />
        <div className="card-title">
          {categoryItems.name}
        </div>
        <div>
          Word: {wordsCount}
        </div>
        <div className='btns_admin'>
          <button onClick={updateBtnHandler} className='btns_action'>Update</button>
          <button onClick={addWordBtnHandler} className='btns_action'>Add word</button>
        </div>
      </div>
      <div className={!showUpdate ? 'front front_admin' : 'none'}>
        <div className="input_category">
          <input
          onChange={inputHandler} 
          value={inputName}
          className='input_category__name' type="text" name="input_category_name" id="input_category_name"
          defaultValue={categoryItems.name} />
          <label className='input_category__label' htmlFor="input_category_name">Category Name</label>
        </div>
        <div className='btns_category'>
          <button onClick={updateBtnHandler} className='category_btn_cansel'>Cansel</button>
          <button onClick={createBtnHandler} className='category_btn_create'>Create</button>
        </div>
      </div>
    </>
  );
};

export default BaseCard;