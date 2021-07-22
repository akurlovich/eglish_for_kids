import React, { FC, useState } from 'react';
import model, { DataType } from '../model';

interface ICategoryProps {
  onChangeCat: (item: DataType) => void;
  chooseCreateCategory: () => void;
}

const CreateCategory: FC<ICategoryProps> = ({onChangeCat, chooseCreateCategory}) => {
  
  const [inputName, setIntupName] = useState<string>('')
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntupName(event.target.value)
  }

  const buttonHandler = async () => {
    const res = await model.addCategory<DataType>(inputName);
    onChangeCat(res);
    chooseCreateCategory();
  }
  return (
    <div className='card card_admin'>
      <div className='front front_admin'>
        <div className="input_category">
          <input onChange={inputHandler} value={inputName} className='input_category__name' type="text" name="input_category_name" id="input_category_name" />
          <label className='input_category__label' htmlFor="input_category_name">Category Name</label>
        </div>
        <div className='btns_category'>
          <button onClick={() => chooseCreateCategory()} className='category_btn_cansel'>Cansel</button>
          <button onClick={buttonHandler} className='category_btn_create'>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;