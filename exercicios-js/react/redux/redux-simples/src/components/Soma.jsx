import React from 'react'
import { connect } from "react-redux";

import Card from './Card'

function Soma(props) {
    
    const { min, max } = props.numeros
    
    return (
        <Card title="Soma dos Números" Blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        numeros: state.numeros
    } /* passa numeros como propriedades */
}


export default connect(mapStateToProps)(Soma)
