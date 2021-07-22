import React, { FC } from 'react';

interface ICardProperty {
  chooseCreateCategory: () => void;
}

const CardCreateAdmin: FC<ICardProperty> = ({chooseCreateCategory}) => {

  const showCreate = () => {
    chooseCreateCategory()
  }
 
  return (
    <div style={{cursor: 'pointer'}} onClick={showCreate} className='card card_admin'>
      <div className='front front_admin'>
        <div className="card-title">
          Create new Category
        </div>
        <div>
          <img className='create_cat_img' src="./create_cat.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardCreateAdmin;