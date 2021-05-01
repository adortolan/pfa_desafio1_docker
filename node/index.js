const express = require('express');
const server = express();
const port = 3000;
const config = {
    host : 'mysql_pfa',
    user : 'pfadocker',
    password : 'pfadocker',
    database : 'pfa'
}

const mysql     = require('mysql');
var connection  = mysql.createConnection(config) 

server.get('/',(req,res)=>{
       connection.query(`select * from modules`,function (error, results, fields){
        if (error){
            if(error.code =="ECONNREFUSED")
                return res.status(503).send({error : "Aguardando Conexão Com Bando de Dados! Tente novamente mais tarde"})
            return res.status(500).send({error: "Erro ao acessar banco de dados!"})
        }
        return res.send(results);
    });
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})