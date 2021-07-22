import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actionType } from '../redux/mainReducer';

interface IMainPageCardProps {
  pageName: string;
  pageNumber: number;
  pageImage: string;
}

const MainPageCard: FC<IMainPageCardProps> = ({pageName, pageNumber, pageImage}) => {
  const dispatch = useDispatch();
  const moveToPage = () => {
    console.log(pageNumber);
    dispatch({
      type: actionType.pageNumber,
      payload: pageNumber,
    });
  }
  return (
    <div onClick={moveToPage} className="card">
      <div className='front'>
       <div className='img-card' style={{backgroundImage: `url(/${pageImage})`}}></div>
        <div className='description'>
          <div className="description-string">
            <div className="description-title">{pageName}</div>
            <div className="roll-button">
              <img  src='' alt="" className="arrow"/>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default MainPageCard;