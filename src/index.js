import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./styles/base.css"
import Minesweeper from './Minesweeper';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Minesweeper />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
