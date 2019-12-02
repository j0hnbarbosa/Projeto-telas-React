import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, TableCell, TableRow, TableHead, Button  } from '@material-ui/core';
import NavBar from '../../utils/navBar';


const ListarVeiculo = () => {
  // const veiculo =  veiculoTeste();
  const [veiculo, setveiculo] = useState(null);

  const fetchData = () => {
    // if (usuario) {
    axios.get(`http://127.0.0.1:5000/listarVeiculo`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      setveiculo(res.data);
    }).catch(e => console.log(e));
  // }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deletarVeiculo = (id) => {
    
    axios.delete(`http://127.0.0.1:5000/deletarVeiculo`, {data: {id}})
    .then(res => {
      fetchData();
    }).catch(e => console.log(e));
  }

  console.log("Aqui", veiculo)
  return (
  <div>
    <NavBar />
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Marca</TableCell>
          <TableCell>Fabricante</TableCell>
          <TableCell>Ano</TableCell>
          <TableCell>Chassis</TableCell>
          <TableCell>Cor</TableCell>
        </TableRow>
      </TableHead>

      {veiculo && veiculo.map((clien) => (
        <TableRow>
          <TableCell>{clien.marca}</TableCell>
          <TableCell>{clien.fabricante}</TableCell>
          <TableCell>{clien.ano}</TableCell>
          <TableCell>{clien.chassis}</TableCell>
          <TableCell>{clien.cor}</TableCell>
          <Button onClick={() => deletarVeiculo({"id": clien.id})} >Editar</Button>
          <Button onClick={() => deletarVeiculo(clien.id)}>DELETAR</Button>
        </TableRow>
      ))}
    </Table>
  </div>
  )
}

export default ListarVeiculo;
