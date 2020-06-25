import "./Intervalo.css";
import React, { useState } from "react";

import Card from "./Card";

import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros";
import { connect } from "react-redux";

function Intervalo (props){
    const { min, max } = props

    return (
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={
                        event => props.alterarMinimo(+event.target.value) 
                    } />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange= {
                        event => props.alterarMaximo(+event.target.value)
                    } />
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}
/* essa função passa os metodos para props */
function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Intervalo)
