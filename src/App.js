import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from './context'
import CheckBoxList from './CheckBoxList' 


function App() {
  return (
    <Provider>
    <div className="App">
      <CheckBoxList />
    </div>
    </Provider>
  );
}

export default App;
