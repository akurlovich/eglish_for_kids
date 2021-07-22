import axios from "axios";
import { ICardItem } from "./components/CardField";

/* eslint-disable import/no-anonymous-default-export */
export interface WordsType {
  naitive: string,
  translate: string,
  image: string,
  audio: string,
  _id: number,
  categoryId: string,
}
export interface DataType {
  name: string,
  words: WordsType[],
  _id: number
}

export default {
  pageNameArr: ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Sport', 'Colors'],

  playSound: (url: string) => {
    const soundKey = new Audio();
    soundKey.src = url;
    soundKey.currentTime = 0;
    soundKey.play();
  },
  shuffle: (arr: ICardItem[]) => {
    let j: number;
    let temp: ICardItem;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }, 
 

  async getAllCategory<DataType>(): Promise<DataType[]> {
      const response = await axios.get('https://efkadmin.herokuapp.com/category');
      console.log('server:', response.data);
      return response.data;
  },
  async getOneCategory<DataType>(id: string): Promise<DataType> {
    const response = await axios.get(`https://efkadmin.herokuapp.com/category/${id}`);
    console.log('server:', response);
    return response.data;
  },

  async addCategory<DataType>(name: string): Promise<DataType> {
    const response = await axios.post('https://efkadmin.herokuapp.com/category', {
      name: name,
    });
    return response.data;
  },
  async addWord<WordsType>(naitive: string, translate: string, image: string, audio: string, categoryId: string): Promise<WordsType> {
      const res = await axios.post(`https://efkadmin.herokuapp.com/category/word`, {
          naitive,
          translate,
          image,
          audio,
          categoryId,
      });
    return res.data;
  },
  async deleteCategory<DataType>(id: string): Promise<DataType> {
    return await axios.delete(`https://efkadmin.herokuapp.com/category/${id}`)
  }


}