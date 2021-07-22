import { ICardItem } from "../components/CardField";
import { DataType } from "../model";

export interface IMenuReducer {
  chooseMainPage: boolean;
  loginShow: boolean;
  menuOpen: boolean;
  switchGameMode: boolean;
  startGame: boolean;
  resumeGame: boolean;
  page: number;
  starsArr: string[];
  winCard: number;
  loseCard: number;
  currentAudio: string;
  currentArray: ICardItem[];
  startBtn: boolean;
  categoryID: DataType;
  // showLogin: boolean;
}

export const initialState: IMenuReducer = {
  chooseMainPage: false,
  menuOpen: false,
  switchGameMode: false,
  startGame: false,
  resumeGame: false,
  page: 10,
  starsArr: [],
  winCard: 1,
  loseCard: 0,
  currentAudio: '',
  currentArray: [],
  startBtn: false,
  loginShow: false,
  categoryID: {name: "name", words: [], _id: 1123},
  // showLogin: false,
};

// action = {type: '', payload: ''}

export const actionType = {
  switchMenu: 'switch_menu',
  pageNumber: 'pageNumber',
  gameMode: 'switchGameMode',
  addStar: 'addStar',
  addWinCount: 'addwincard',
  addLoseCount: 'addlosecount',
  startGame: 'startGame',
  resumeGame: 'resumeGame',
  currentAudio: 'currentaudio',
  currentArray: 'currentArray',
  startBtn: 'startBtn',
  resetState: 'resetState',
  showLogin: 'showLogin',
  chooseMainPage: 'chooseMainPage',
  categoryID: 'categoryID',
};
export const mainReducer = (
    state: IMenuReducer = initialState, 
    action: { type: string; 
              payload: number; 
              addItems: string; 
              payloadCurrentArray: ICardItem[];
              categoryData: DataType;
            }
    ) => {
  switch (action.type) {
    case 'OPEN':
      return {...state, page: state.page + action.payload}
    case 'CLOSE':
      return {...state, page: state.page - action.payload}
    case actionType.pageNumber:
      return {...state, page: action.payload}
    case actionType.switchMenu: 
      return {...state, menuOpen: !state.menuOpen} 
    case actionType.gameMode:
      return {...state, switchGameMode: !state.switchGameMode}
    case actionType.addStar:
      // return {...state, addStar: state.starsArr.push(action.addItems)}
      return {...state, starsArr: [...state.starsArr, action.addItems]}
    case actionType.addWinCount:
      return {...state, winCard: state.winCard + 1}
    case actionType.startGame:
      return {...state, startGame: !state.startGame}
    case actionType.resumeGame:
      return {...state, resumeGame: !state.resumeGame}
    case actionType.currentAudio:
      return {...state, currentAudio: action.addItems}
    case actionType.currentArray:
      return {...state, currentArray: action.payloadCurrentArray}
    case actionType.startBtn:
      return {...state, startBtn: !state.startBtn}
    case actionType.addLoseCount:
      return {...state, loseCard: state.loseCard + 1}
    case actionType.showLogin: 
      return {...state, loginShow: !state.loginShow}
    case actionType.chooseMainPage:
      return {...state, chooseMainPage: !state.chooseMainPage}
    case actionType.categoryID:
      return {...state, categoryID: action.categoryData}
    case actionType.resetState:
      return {
        menuOpen: false,
        switchGameMode: false,
        startGame: false,
        resumeGame: false,
        page: 10,
        starsArr: [],
        winCard: 1,
        loseCard: 0,
        currentAudio: '',
        currentArray: [],
        startBtn: false,
        loginShow: false,
        chooseMainPage: false,
        categoryID: {name: "name", words: [], _id: 1123},
      }
    default:
      return state;
  }
}