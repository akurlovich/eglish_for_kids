import { createStore } from '@reduxjs/toolkit';
import { mainReducer } from './mainReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(mainReducer, composeWithDevTools());