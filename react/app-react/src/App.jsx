import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragment from './components/basicos/Fragment'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/Repeticao/ListaAluno'
import Produtos from "./components/Repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInto from './components/condicional/UsuarioInto'
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from './components/comunicacao/Input'
import Contador from './components/contador/Contador'
import Mega from './components/Mega/Mega'

export default function () {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
            <Card titulo="13 - Desafio MegaSena" color="#1074d1">
                    <Mega qtde={6}/>
                </Card>
            <Card titulo="12 - Desafio Contador" color="#424242">
                    <Contador numeroInicial={10}/>
                </Card>
            <Card titulo="11 - Desafio Input" color="#8f8f95">
                    <Input />
                </Card>
            <Card titulo="10 - Desafio Comunicação Indireta" color="#8bad39">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="09 - Desafio Comunicação Direta" color="#59323c">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="08 - Desafio Par ou Impar" color="#982395">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <UsuarioInto usuario={{ nome: 'Rafael' }} />
                    <UsuarioInto usuario={{ nome: 'Bruna' }} />
                    <UsuarioInto usuario={{}} />
                </Card>
                <Card titulo="07 - Desafio Tabela Produtos" color="#00c8f8">
                    <Produtos></Produtos>
                </Card>
                <Card titulo="06 - Desafio Lista Alunos" color="#00c8f8">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="05 - Desafio Familia" color="#00c8f8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Gustavo" sobrenome="Ferreira" />

                    </Familia>
                </Card>
                <Card titulo="04 - Desafio Aleatório" color="green">
                    <Aleatorio max={1} min={60} />

                </Card>

                <Card titulo="03 - esafio Aleatório">
                    <Fragment />

                </Card>

                <Card titulo="02 - Desafio Aleatório">
                    <ComParametro
                        titulo="Isso é um título."
                        subtitulo="Isso é um subtitulo."
                        nota={9.8} />

                </Card>

                <Card titulo="01 - Desafio Aleatório">
                    <Primeiro />

                </Card>
            </div>
        </div>
    )
}