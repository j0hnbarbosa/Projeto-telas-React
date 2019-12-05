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

const EditarVeiculo = () => {
  const [veiculo, setVeiculo] = useState(null);
  const veiculoId = window.location.pathname.split('/')[2];

  // useEffect(() => {
    const fetchData = () => {
      if (veiculo) {
      axios.put(`http://127.0.0.1:5000/editarCliente/${veiculoId}`, veiculo, {      
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
  //   fetchData();
  // }, []);

  useEffect(() => {
    const VeiculoId = window.location.pathname.split('/')[2];
    const fetchData = () => {
        axios.get(`http://127.0.0.1:5000/listarVeiculo`)
        .then(res => {
          console.log(res);
          console.log(res.data[0]);
          if(res && res.data){
            let valor = res.data;
            valor = valor.filter(vlr => vlr.id+"" === VeiculoId)
            console.log(valor);
            setVeiculo({...valor[0]});
          }
        }).catch(e => console.log(e));
      }
    fetchData();
    }, []);   

  const classes = useStyles();
  const onchange = (event) => {
    console.log(event)
    setVeiculo({...veiculo, [event.target.name]: event.target.value});
  }

  console.log(veiculo)

  return  (
  <div>
          <NavBar />

  <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={3}>
      <TextField name="marca" value={veiculo && veiculo.marca} onChange={(event) => onchange(event)} />
      </Grid>
      <Grid item xs={3}>
        <TextField name="fabricante" value={veiculo && veiculo.fabricante}  onChange={(event) => onchange(event)} />  
      </Grid>
      <Grid item xs={3}>
        <TextField name="ano" value={veiculo && veiculo.ano}  onChange={(event) => onchange(event)} />
      </Grid>
    </Grid>

    <Grid container spacing={1}>
    <Grid item xs={3}>
        <TextField name="chassis" value={veiculo && veiculo.chassis}  onChange={(event) => onchange(event)} />
      </Grid>
      <Grid item xs={3}>
        <TextField name="cor" value={veiculo && veiculo.cor} onChange={(event) => onchange(event)} />
    </Grid>
    <Grid item xs={3}>
        <Button variant="contained" onClick={() => fetchData()}>salvar</Button>
      </Grid>
    </Grid>

  </div>
  </div>
)
}

export default EditarVeiculo;