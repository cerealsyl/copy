import React from 'react';

import './App.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import WhiteBoardReducer from './reducer/WhiteBoardReducer'
import WhiteBoardContainer from './container/WhiteBoardContainer'
import combined from "./reducer";

const store = createStore(combined);


function App() {
  return (
      <Provider store={store}>
        <WhiteBoardContainer />
      </Provider>

  );
}

export default App;
