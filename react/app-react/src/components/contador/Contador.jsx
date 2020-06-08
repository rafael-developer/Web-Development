import React, { Component } from 'react'
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

import './Contador.css'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passosInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
          /*  passo: +evento.target.value,  + do inicia converte para inteiro */
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>    
                <Botoes setInc={this.inc} setDec={this.dec}/>
                
                <p>Valor Inicial: {this.props.numeroInicial}</p>
            </div>
        )
    }
}

export default Contador

//Componente baseado em classe