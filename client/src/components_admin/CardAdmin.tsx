import React, { FC } from 'react';
import { DataType } from '../model';
import BaseCard from './category/BaseCard';

interface ICategoryProps {
  categoryItems: DataType;
  onChangeCat: (item: DataType) => void;
}

const CardAdmin: FC<ICategoryProps> = ({categoryItems, onChangeCat}) => {

  return (
    <div className='card card_admin'>
      <BaseCard categoryItems={categoryItems} onChangeCat={onChangeCat}/>
    </div>
  );
};

export default CardAdmin;