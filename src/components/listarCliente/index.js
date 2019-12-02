import React, {useState, useEffect} from 'react';
import { Table, TableCell, TableRow, TableHead, Button  } from '@material-ui/core';
import NavBar from '../../utils/navBar';
import axios from 'axios';

const ListarCliente = () => {
  
  const editarCliente = (id) => {
    window.location = `/editarCliente/${id}`;
  }

  const [clientes, setClientes] = useState(null);
  const fetchData = () => {
      axios.get(`http://127.0.0.1:5000/listarCliente`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setClientes(res.data);
      }).catch(e => console.log(e));
    }
  
  useEffect(() => {
      fetchData();
    }, []);

  const deletarCliente = (id) => {
    
    axios.delete(`http://127.0.0.1:5000/deletarCliente`, {data: {id}})
    .then(res => {
      fetchData();
    }).catch(e => console.log(e));
  }
    
    console.log("Aqui", clientes)
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
          <Button onClick={() => editarCliente(clien.id)} >Editar</Button>
          <Button onClick={() => deletarCliente(clien.id)}>DELETAR</Button>
        </TableRow>
      ))}
    </Table>
  </div>
  )
}

export default ListarCliente;
