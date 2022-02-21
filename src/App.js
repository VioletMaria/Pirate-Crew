import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';
import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/pirate/:_id">
          <Detail/>
        </Route>
        
        <Route exact path="/pirate/:_id/edit">
          <Update/>
        </Route>

        <Route exact path="/new">
          <Create/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
