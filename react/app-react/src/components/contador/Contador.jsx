import React, { Component } from 'react'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passosInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passosInicial
        })
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passosInicial
        })
    }
    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <button onClick={this.inc}>+</button>
                <p>Valor Inicial: {this.props.numeroInicial}</p>
            </div>
        )
    }
}

export default Contador

//Componente baseado em classe