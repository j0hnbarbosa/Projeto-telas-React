import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  return(
  <AppBar position="static">
    <di style={{display: 'flex', flexDirection: 'vertical', justifyContent: 'space-between'}}>
    <Link to="/cadastrarCliente" style={{color: '#CECECE'}}>Cadastrar Cliente</Link>
    <Link to="/login" style={{color: '#CECECE'}}>LOGIN</Link>
    <Link to="/cadastrarUsuario" style={{color: '#CECECE'}}>Cadastrar Usuario</Link>
    <Link to="/recuperarSenhaVerificaEmail" style={{color: '#CECECE'}}>Recuperar Senha</Link>
    </di>
  </AppBar>
  )
}

export default NavBar;