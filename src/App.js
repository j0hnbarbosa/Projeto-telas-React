import React from 'react';
import Login from '../src/components/login';
import CadastrarCliente from '../src/components/cadastrarCliente';
import CadastraUsuario from '../src/components/cadastraUsuario';
import RecuperarSenha from './components/recuperarSenha';
import NavBar from '../src/components/navBar';

function App() {
  return (
    <>
      <NavBar />
      {/* <CadastrarCliente /> */}
      {/* <Login /> */}
      <RecuperarSenha />
      {/* <CadastraUsuario /> */}
    </>
  );
}

export default App;
