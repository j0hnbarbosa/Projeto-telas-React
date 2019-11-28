import React from 'react';
import { Table, TableCell, TableRow, TableHead  } from '@material-ui/core';
import NavBar from '../../utils/navBar';

const clientesTeste = () => {
  return [
        {
          marca: 'Civic',
          fabricante: 'Toyota',
          ano: 2016,
          chassis: '55665',
          cor: 'Preto', 
        }
        ]
};

const ListarVeiculo = () => {
  const clientes =  clientesTeste();
  console.log(clientes)
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

      {clientes && clientes.map((clien) => (
        <TableRow>
          <TableCell>{clien.marca}</TableCell>
          <TableCell>{clien.fabricante}</TableCell>
          <TableCell>{clien.ano}</TableCell>
          <TableCell>{clien.chassis}</TableCell>
          <TableCell>{clien.cor}</TableCell>
        </TableRow>
      ))}
    </Table>
  </div>
  )
}

export default ListarVeiculo;
