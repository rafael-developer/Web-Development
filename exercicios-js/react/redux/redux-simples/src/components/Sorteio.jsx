import React from 'react'

import Card from './Card'

export default props => {

    const { min, max } = props
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