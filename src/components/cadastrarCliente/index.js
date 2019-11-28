import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import NavBar from '../../utils/navBar';
import fetchData from '../../utils/fetchData';

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

const CadastrarCliente = () => {
  const [usuario, setUsuario] = useState(null);

  const classes = useStyles();
  const onchange = (event) => {
    console.log(event)
    setUsuario({...usuario, [event.target.name]: event.target.value});
  }

  console.log(usuario)

  return  (
  <div>
          <NavBar />

  <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={3}>
      <TextField name="nome" label="Nome" onChange={(event) => onchange(event)} />
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
       <Grid item xs={3} />
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => fetchData(usuario, 'cadastrarCliente')}>salvar</Button>
      </Grid>
    </Grid>
  </div>
  </div>
)
}

export default CadastrarCliente;