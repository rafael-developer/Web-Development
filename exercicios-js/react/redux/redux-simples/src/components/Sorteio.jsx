import React from 'react'
import { connect } from "react-redux";

import Card from './Card'

const Sorteio = props => {

    const { min, max } = props.numeros
    const random = parseInt(Math.random() * (max + min))

    return (
        <Card title="Sorteio de um número" Purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{random}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps (state) { return {numeros: state.numeros} }

export default connect(mapStateToProps)(Sorteio)