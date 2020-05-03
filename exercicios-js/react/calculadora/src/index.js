import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/Calculator';
import * as serviceWorker from './serviceWorker';

//import Calculator from './main/Calculator.jsx';

ReactDOM.render(
    <div>
      <h1>CALCULADORA</h1>
      <App />
    </div>
  ,document.getElementById('root')
);

serviceWorker.unregister();
