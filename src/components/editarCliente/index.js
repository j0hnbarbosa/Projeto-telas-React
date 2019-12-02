import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import NavBar from '../../utils/navBar';

const useStyles = makeStyles(theme => ({
  root: {

    margin: '30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const EditarCliente = () => {
  const [clientes, setClientes] = useState(null);
  const clienteId = window.location.pathname.split('/')[2];

    const fetchData = () => {
      if (clientes) {
      axios.put(`http://127.0.0.1:5000/editarCliente/${clienteId}`, clientes, {      
        headers: {                  
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        // "Content-Type": "application/json;charset=UTF-8"                   
  }},)
      .then(res => {
        console.log(res);
        console.log(res.data);
        // setclientes(res.data);
      })
    }
    }

    useEffect(() => {
      const clienteId = window.location.pathname.split('/')[2];
      const fetchData = () => {
          axios.get(`http://127.0.0.1:5000/listarCliente`)
          .then(res => {
            console.log(res);
            console.log(res.data[0]);
            if(res && res.data){
              const valor = res.data;
              console.log(valor);
              debugger
              setClientes(valor.map(vlr => vlr.id+"" === clienteId));
            }
          }).catch(e => console.log(e));
        }
      fetchData();
      }, []);   

  const classes = useStyles();
  const onchange = (event) => {
    console.log(event)
    setClientes({...clientes, [event.target.name]: event.target.value});
  }

  console.log(window.location.pathname.split('/')[2])

  return  (
  <div>
          <NavBar />

  <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={3}>
      <TextField name="nome" value={clientes && clientes.nome} label="Nome" onChange={(event) => onchange(event)} />
      </Grid>
      <Grid item xs={3}>
        <TextField name="sobrenome" label="Sobrenome" onChange={(event) => onchange(event)} />  
      </Grid>
      <Grid item xs={3}>
        <TextField name="cpf" label="Cpf" onChange={(event) => onchange(event)} />
      </Grid>
    </Grid>

    <Grid container spacing={1}>
      <Grid item xs={3}>
      <TextField name="endereco" label="Endereço" onChange={(event) => onchange(event)} />
      </Grid>
      <Grid item xs={3}>
        <TextField name="telefone" label="Telefone" onChange={(event) => onchange(event)} />
      </Grid>
      <Grid item xs={3}>
        <TextField name="email" label="Email" onChange={(event) => onchange(event)} />
      </Grid>
    </Grid>

    <Grid container spacing={1}>
      <Grid item xs={3}>
        <TextField name="senha" label="Senha" onChange={(event) => onchange(event)} />
      </Grid>
      {/* <Grid item xs={3}>
        <TextField name="confirmaSenha" label="Confirmar Senha" onChange={(event) => onchange(event)} />
      </Grid> */}
       <Grid item xs={3} />
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => fetchData()}>salvar</Button>
      </Grid>
    </Grid>
  </div>
  </div>
)
}

export default EditarCliente;