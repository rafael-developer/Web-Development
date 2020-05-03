import React from 'react';
import ReactDOM from 'react-dom';
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai>
            <Filho nome="Rafael" sobrenome="Gildo" />
        </Pai>
    </div>
, document.getElementById('root'));