import React, { FC } from 'react';

const WordAddAdmin: FC = () => {
  return (
    <div style={{cursor: 'pointer'}} className='card card_admin'>
      <div className='front front_admin'>
        <div className="card-title">
          Add new word
        </div>
        <div>
          <img className='create_cat_img' src="./create_cat.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WordAddAdmin;