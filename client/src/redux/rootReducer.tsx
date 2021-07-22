import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./mainReducer";
import { serverReducer } from "./serverReducer";

export const rootReducer = combineReducers({
  menu: mainReducer,
  serverReduser: serverReducer

})

