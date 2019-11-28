import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../src/components/login';
import CadastrarCliente from '../src/components/cadastrarCliente';
import CadastrarUsuario from '../src/components/cadastraUsuario';
import RecuperarSenha from './components/recuperarSenha';
import TrocarSenha from './components/trocarSenha';
import CadastrarVeiculo from './components/cadastrarVeiculo';
import ListarCliente from './components/listarCliente';
import ListarVeiculo from './components/listarVeiculo';
import EditarCliente from './components/editarCliente';
import EditarVeiculo from './components/editarVeiculo';
import Sobre from './components/sobre';

const Rotas = () => (
  <BrowserRouter>
    <Switch>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/cadastrarCliente" component={CadastrarCliente} />
        <Route path="/cadastrarUsuario" component={CadastrarUsuario} />
        <Route path="/recuperarSenhaVerificaEmail" component={RecuperarSenha} />
        <Route path="/trocarSenha" component={TrocarSenha} />
        <Route path="/cadastrarVeiculo" component={CadastrarVeiculo} />
        <Route path="/listarCliente" component={ListarCliente} />
        <Route path="/listarVeiculo" component={ListarVeiculo} />
        <Route path="/editarCliente" component={EditarCliente} />
        <Route path="/editarVeiculo" component={EditarVeiculo} />
        <Route path="/sobre" component={Sobre} />
    </Switch>
  </ BrowserRouter>
)

export default Rotas;