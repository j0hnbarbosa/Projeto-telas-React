import React from 'react';
import axios from 'axios';

const fetchData = (valor, path) => {
  if (valor) {
  axios.post(`http://127.0.0.1:5000/${path}`, valor, {      
    headers: {                  
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    // "Content-Type": "application/json;charset=UTF-8"                   
},})
  .then(res => {
    console.log(res);
    console.log('Sua Reposta', res.data);
    // setUsuario(res.data);
  })
}
}

export default fetchData;