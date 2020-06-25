import React from 'react'
import { connect } from 'react-redux'
/* connect é um decorator */
import Card from './Card'

const Media = props => {

    const { min, max } = props.numeros

    return (
        <Card title="Média dos Números" Green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}
/* mapei estado para as propriedades */
function mapStateToProps(state) {
    return {
        /* ou assim
        min: state.numeros.min,
        max: state.numeros.max 
        */

        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Media)