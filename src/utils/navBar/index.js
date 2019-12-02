import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
  return(
  <AppBar position="static">
    <div style={{display: 'flex', flexDirection: 'vertical', justifyContent: 'space-between'}}>

      {/* <Link to="/login" style={{color: '#CECECE'}}>LOGIN</Link> */}
      <Link to="/cadastrarCliente" style={{color: '#CECECE'}}>Cadastrar Cliente</Link>
      {/* <Link to="/cadastrarUsuario" style={{color: '#CECECE'}}>Cadastrar Usuario</Link> */}
      <Link to="/recuperarSenhaVerificaEmail" style={{color: '#CECECE'}}>Recuperar Senha</Link>
      <Link to="/trocarSenha" style={{color: '#CECECE'}}>Trocar Senha</Link>
      <Link to="/cadastrarVeiculo" style={{color: '#CECECE'}}>Cadastrar Veiculo</Link>
      <Link to="/listarCliente" style={{color: '#CECECE'}}>Listar Cliente</Link>
      <Link to="/listarVeiculo" style={{color: '#CECECE'}}>Listar Veiculo</Link>
      <Link to="/editarCliente" style={{color: '#CECECE'}}>Editar Cliente</Link>
      <Link to="/editarVeiculo" style={{color: '#CECECE'}}>Editar Veiculo</Link>
      <Link to="/sobre" style={{color: '#CECECE'}}>Sobre</Link>
      <Link to="/" style={{color: '#CECECE'}}>SAIR</Link>

    </div>
  </AppBar>
  )
}

export default NavBar;