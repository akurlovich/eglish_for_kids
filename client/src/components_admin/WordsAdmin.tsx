import React, { FC } from 'react';
import model, { DataType, WordsType } from '../model';

interface ICategoryProps {
  categoryItems: WordsType;
  onChangeCat: (item: DataType) => void;
}

const WordsAdmin: FC<ICategoryProps> = ({categoryItems, onChangeCat}) => {

  const playTranslate = () => {
    model.playSound(categoryItems.audio)
  }
  
  return (
      <div className='card card_admin card_words'>
        <div className='front front_admin front_words'>
          <img className='admin_close' src="./close.png" alt="" />
          <div className="inputs_for_words">
            <div className="input_category input_words">
              Native: {categoryItems.naitive}
            </div>
            <div className="input_category input_words">
              Translation: {categoryItems.translate}
            </div>
            <div className="input_files">
              <div className="file_input">
                <div className="input_sound">
                  Sound: 
                </div>
                <button
                  style={{border: '1px solid black', padding: '5px', marginRight: '20px', fontSize: '20px', borderRadius: '10px', width: '80px'}} 
                  onClick={playTranslate}>Play</button>
                
              </div>
              <div className="file_input">
                <div className="input_sound">
                  Image:
                </div>
              </div>
              <div style={{textAlign: 'center'}} className="word_img">
                <img style={{width: '100%', maxHeight: '100px'}} className='word_images' src={categoryItems.image} alt="" />
              </div>
            </div>
          </div>
          <div className='btns_category'>
            <button className='category_btn_create'>Create</button>
          </div>
        </div>
      </div>
  );
};

export default WordsAdmin;