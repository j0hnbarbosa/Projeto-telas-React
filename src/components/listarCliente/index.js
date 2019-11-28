import React, {useState} from 'react';
import { Table, TableCell, TableRow, TableHead  } from '@material-ui/core';
import NavBar from '../../utils/navBar';
import axios from 'axios';

const clientesTeste = () => {
  return [
        {
          nome: 'Raichu',
          sobrenome: 'CHUU',
          cpf: 1500,
          endereco: 'Rua Choque',
          telefone: '989898988', 
          email: "Ray@chuu.cho",
          senha: 'SSSO ',
        }
        ]
};

const ListarCliente = () => {
  const clientes =  clientesTeste();
  const [usuario, setUsuario] = useState(null);
  // useEffect(() => {
    const fetchData = () => {
      if (usuario) {
      axios.post(`http://127.0.0.1:5000/cadastrarVeiculo`, usuario)
      .then(res => {
        console.log(res);
        console.log(res.data);
        // setUsuario(res.data);
      })
    }
    }
  //   fetchData();
  // }, []);
  console.log(clientes)
  return (
  <div>
    <NavBar />
    <Table>
    <TableHead>
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>sobrenome</TableCell>
          <TableCell>cpf</TableCell>
          <TableCell>endereco</TableCell>
          <TableCell>telefone</TableCell>
          <TableCell>email</TableCell>
          <TableCell>senha</TableCell>
        </TableRow>
      </TableHead>
      {clientes && clientes.map((clien) => (
        <TableRow>
          <TableCell>{clien.nome}</TableCell>
          <TableCell>{clien.sobrenome}</TableCell>
          <TableCell>{clien.cpf}</TableCell>
          <TableCell>{clien.endereco}</TableCell>
          <TableCell>{clien.telefone}</TableCell>
          <TableCell>{clien.email}</TableCell>
          <TableCell>{clien.senha}</TableCell>
        </TableRow>
      ))}
    </Table>
  </div>
  )
}

export default ListarCliente;
