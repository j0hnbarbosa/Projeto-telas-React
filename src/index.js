import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../src/components/login';
import CadastrarCliente from '../src/components/cadastrarCliente';
import CadastrarUsuario from '../src/components/cadastraUsuario';
import RecuperarSenha from './components/recuperarSenha';

ReactDOM.render(
  <>
  <BrowserRouter>
  <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/cadastrarCliente" component={CadastrarCliente} />
      <Route path="/login" component={Login} />
      <Route path="/cadastrarUsuario" component={CadastrarUsuario} />
      <Route path="/recuperarSenhaVerificaEmail" component={RecuperarSenha} />
  </Switch>
</ BrowserRouter>
</>
  , document.getElementById('root'));
        
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
