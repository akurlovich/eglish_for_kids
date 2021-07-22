import React, { FC, useState } from 'react';
import model, { WordsType } from '../model';

interface IPropsWord {
  categoryID: string;
}

const WordAdmin: FC<IPropsWord> = ({categoryID}) => {

  const [native, setNative] = useState('');
  const [translate, setTranslate] = useState('');
  const [image, setImage] = useState('');
  const [audio, setAudio] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [audioSrc, setAudioSrc] = useState('')

  const nativeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNative(event.target.value);
  }
  const translateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTranslate(event.target.value);
  }
  const audioHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];

    const base64 = (files: File) =>
    new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = () => resolve(reader.result);
    });
    const urlImage = await base64(file);
    if (urlImage) {
      setAudioSrc(urlImage as string)
    }
  }
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];

    const base64 = (files: File) =>
    new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = () => resolve(reader.result);
    });
    const urlImage = await base64(file);
    if (urlImage) {
      setImageSrc(urlImage as string)
    }
  }

  const addNewWord = async () => {
  
    const cat = await model.addWord<WordsType>(native, translate, imageSrc, audioSrc, categoryID);
  }

  return (
    <div className='card card_admin card_words'>
      <div className='front front_admin front_words'>
        <img className='admin_close' src="./close.png" alt="" />
        <div className="inputs_for_words">
          <div className="input_category input_words">
            <input
              onChange={nativeHandler}
              value={native}
              className='input_category__name' type="text" name="input_category_name" id="input_category_name" />
            <label className='input_category__label label_words' htmlFor="input_category_name">Word:</label>
          </div>
          <div className="input_category input_words">
            <input
              onChange={translateHandler}
              value={translate}
              className='input_category__name' type="text" name="input_category_name2" id="input_category_name" />
            <label className='input_category__label label_words' htmlFor="input_category_name2">Translation:</label>
          </div>
          <div className="input_files">
            <div className="file_input">
              <div className="input_sound">
                Sound:
              </div>
              <input
                onChange={audioHandler}
                className='word_input_file' type="file" name="label_file3" id="label_file3" />
              <label className='word_label_file' htmlFor="label_file3">Select file</label>
            </div>
            <div className="file_input">
              <div className="input_sound">
                Image:
              </div>
              <input
                onChange={imageHandler}
                className='word_input_file' type="file" name="label_file2" id="label_file2" />
              <label className='word_label_file' htmlFor="label_file2">Select file</label>
            </div>
            <div style={{textAlign: 'center'}} className="word_img">
              <img  className='word_images' src={imageSrc} alt="" />
            </div>
          </div>
        </div>
        <div className='btns_category'>
          <button onClick={addNewWord} className='category_btn_create'>Create</button>
        </div>
      </div>
    </div>
  );
};

export default WordAdmin;