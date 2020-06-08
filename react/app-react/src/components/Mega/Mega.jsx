import React, {useState} from 'react';
import './Mega.css'
export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
        gerarNumeroNaoContido(min, max, array) :
        aleatorio
    }
    
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0) //preenche array com zeros
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                console.log([ ...nums, novoNumero])
                return [ ...nums, novoNumero ]
            }, [])
            .sort((n1,n2) => n1 - n2)
    
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numeroIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numeroIniciais)

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="numeros">Qtde de Números</label>
                <input id='numeros'
                min='6'
                max='17'
                type="number"
                value={qtde}
                onChange={(e) => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                }}
                />
            </div>
            <button onClick={ (_) => setNumeros(gerarNumeros(qtde))}>
                Gerar numeros
            </button>
        </div>
    )
}