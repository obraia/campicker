import React from 'react';
import { Route, Redirect, Switch } from "react-router-native";
import { useSelector, useDispatch } from 'react-redux';

import { IReducers } from './interfaces';

import Auth from './pages/auth';
import Home from './pages/home';
import Import from './pages/importPalettes';
import Export from './pages/exportPalettes';
import Search from './pages/search';
import Palette from './pages/palette';

const Routes = () => {

  const { isAuthenticated } = useSelector((state: IReducers) => state.authReducers);

  return (
    <Switch>
      {!isAuthenticated ?
        <>
          <Route exact path='/' component={Auth} />
        </>
        :
        <>
          <Redirect exact path='/' from='/' to='/home'/>
          <Route exact path='/home' component={Home} />
          <Route exact path='/import' component={Import} />
          <Route exact path='/export' component={Export} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/palette' component={Palette} />
        </>}
    </Switch>
  )
}

export default Routes