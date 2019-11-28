import React from 'react';
import { Typography } from '@material-ui/core';
import NavBar from '../../utils/navBar';

const styleIt = {
  sobreContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#FAFAFA',
    height: '100%',
    width: '100%',
  },
  textoContainer: {
    marginTop: '50px',
    width: '500px'
  },
};

const Sobre = () => ( 
  <div style={styleIt.sobreContainer}>
    <NavBar />
    <Typography style={styleIt.textoContainer} >
      SOBRE O SITE
    </Typography>
    <Typography style={styleIt.textoContainer} >
      Site para cadastro de informações de clientes. 
      Você pode cadastrar seu usuário e após logado em seu usuário você consegue cadastrar clientes e o veículo do cliente, podendo listar todos os clientes cadastrados e todos veículos,
    </Typography>
  </div>
);

export default Sobre;