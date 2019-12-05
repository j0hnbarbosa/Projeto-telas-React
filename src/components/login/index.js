import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import NavBar from '../../utils/navBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Login = () => {
  const [usuario, setUsuario] = useState(null);
  const [retorno, setRetorno] = useState(null);
  // useEffect(() => {
    const fetchData = () => {
      if (usuario) {
      axios.post(`http://127.0.0.1:5000/login`, usuario, {      
        headers: {                  
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        // "Content-Type": "application/json;charset=UTF-8"                   
    },})
      .then(res => {
        console.log(res);
        console.log('Sua Reposta', res.data);
        if(res.data === 'sucesso') {
          window.location = '/listarCliente';
        }
        // setRetorno(res.data);
      })
    }
  }
  //   fetchData();
  // }, []);

  const classes = useStyles();
  const onchange = (event) => {
    console.log(event)
    setUsuario({...usuario, [event.target.name]: event.target.value});
  }

  console.log(usuario)

  return  (
  <div className={classes.root}>
    {/* <NavBar /> */}
        <Typography>
          Trabalho Python
        </Typography>

  <div style={{background: '#FAFBFB', padding: '30px',marginTop: '30px', width: '400px',height: '100px', border: 'solid 1px #CECECE',borderRadius: '5px'}}>
    <Grid container spacing={1}>
      
      <Grid item xs={3}>
        <TextField name="email" label="Email" onChange={(event) => onchange(event)} />
      </Grid>
      <Grid item xs={3}>
        <TextField name="senha" label="Senha" onChange={(event) => onchange(event)} />  
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => fetchData()}>LOGIN</Button>
        <Link href="/cadastrarUsuario" style={{color: '#CECECE', fontSize: '16px'}}>Cadastrar Novo usuario</Link>
      </Grid>
    </Grid>

       <Grid item xs={3} />
  </div>
  </div>
)
}

export default Login;