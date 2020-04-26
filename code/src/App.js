import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { reducer } from '/reducers/reducer'
import { store } from 'reducers/reducer' 
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ store:reducer })
const store = configureStore({ reducer })


export const App = () => {

  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/productinput" exact></Route>
          <Route path="/productinfo" exact></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
