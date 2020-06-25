import React, { useState } from 'react';
import './App.css';

import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Exercícios React-Redux (simples)</h1>
      <div className="linha">
        <Intervalo min={min} max={max}></Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
      <div className="area">
        <div className="box"></div>
      </div>
    </div>
  );
}

export default App;
