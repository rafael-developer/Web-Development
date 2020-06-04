import React from 'react'

export default props => {

    const cb = props.quandoClicar
    const gerarIdade = _ => parseInt(Math.random() * (20)) + 50
    const gerarNerd = _ => Math.random() > 0.5

    return (
        <div>
            <div>
                Controlado pelo componente filho
            </div>
            <button onClick={
                function (e) {
                    cb('João', gerarIdade(), gerarNerd())
                }
            }>Fornecer Informações</button>
        </div>
    )
}