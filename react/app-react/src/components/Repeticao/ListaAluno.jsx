import React from 'react'
import alunos from '../../data/alunos'
import Aluno from './Aluno'

export default props => {
    const List = alunos.map((aluno, i) => {
        return (
            <li key={i} ><Aluno {...aluno} /></li>
        )
    })
    return (
        <div>
            <ul>
                <li>Ana - 9.7</li>
                <li>Carlos - 10</li>
                <li>Daniel - 7</li>
                {List}
            </ul>
        </div>
    )
}