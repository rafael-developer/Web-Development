import React from 'react'

export default (props) => {
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min;
    return (
        <div>
            <h1>Numero aleatorio { aleatorio }</h1>
        </div>
    )
} 
/* usando atributos passados como propriedades */