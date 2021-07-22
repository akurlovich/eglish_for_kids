import { DataType, WordsType } from "../model";

const SET_CATEGORY = 'SET_CATEGORY';

export interface IServerReducer {
  items: DataType[];
}

const initialState: IServerReducer = {
  items: [{name: "name", words: [], _id: 1123}],
}

export const serverReducer = (
  serverState: IServerReducer = initialState, 
  action: {type: string, payload: DataType[]}
) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {...serverState, items: action.payload}
  
    default:
      return serverState;
  }
}

export const getAllCategories = (cat: DataType[]) => ({
  type: SET_CATEGORY,
  payload: cat
})