import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import NavBar from '../navBar';

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

const Login = () => {
  const [usuario, setUsuario] = useState(null);
  // useEffect(() => {
    const fetchData = () => {
      if (usuario) {
      axios.post(`http://127.0.0.1:5000/recuperarSenhaVerificaEmail`, usuario)
      .then(res => {
        console.log(res);
        console.log('Sua Reposta', res.data);
        setUsuario(res.data);
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
  <div>
          <NavBar />

  <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={3}>
      <TextField name="email" label="Email" onChange={(event) => onchange(event)} />
      </Grid>
    </Grid>

       <Grid item xs={3} />
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => fetchData()}>ENVIAR</Button>
      </Grid>
  </div>
  </div>
)
}

export default Login;