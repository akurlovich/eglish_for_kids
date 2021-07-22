import React, { FC } from 'react';
import './css/main.css'
import AdminPage from './components_admin/MainPages/AdminPage';
import UserPage from './components_admin/MainPages/UserPage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AdminWordsPage from './components_admin/MainPages/AdminWordsPage';

export interface ISetMenu {
  menu: boolean;
}

const App: FC = () => {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={UserPage}/>
          <Route path='/category' component={AdminPage}/>
          <Route path='/words' component={AdminWordsPage}/>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
