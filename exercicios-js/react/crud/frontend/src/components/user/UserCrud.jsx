import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

//Estado inicial do Formulário
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: ''},
    list: []
}



export default class UserCrud extends Component {
    
    state = { ...initialState }
    
    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        //se usuário estiver setado o metodo http é PUT senão POST
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        
        //axios[method] é o mesmo que axios.put o colchete é uma alternativa para usar variaveis
        //axios[method] retorna uma função
        axios[method](url, user) //axios based in promisses because this use .then
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Usuários
            </Main>
        )
    }
}