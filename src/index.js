import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'My Minimal React Webpack dasdsBabel Setup';

ReactDOM.render(
  <div><App /></div>,
  document.getElementById('app')
);

module.hot.accept();