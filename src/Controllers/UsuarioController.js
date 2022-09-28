const execSQLQuery = require('../../create-tabela');
const sql = require('../../create-tabela')

exports.post = (req, res) => {
   //const nome = req.body.nome.substring(0,150);
   //console.log(nome);
   execSQLQuery(`INSERT INTO usuarios (NOME) VALUES('${nome}');`, res.status(201));
   // res.status(201).send('Rota POST!');
 };
  
 exports.put = (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0, 150);
    execSQLQuery(`UPDATE usuarios SET NOME = '${nome}' WHERE ID= ${id}` , res.status(201));
    //let id = req.params.id;
    //res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
    execSQLQuery(`DELETE FROM usuarios where ID = ` + parseInt(req.params.id), res.status(200))
    //let id = req.params.id;
    //res.status(200).send(`Rota DELETE com ID! --> ${id}`);
 };
  
 exports.get = (req, res) => {
    execSQLQuery(`SELECT * FROM usuarios;`, res.status(200));
    //res.status(200).send('Rota GET!');
 };
  
 exports.getById = (req, res) => {
    let filter = '';
    if(req.params.id) filter = ` WHERE ID = ` + parseInt(req.params.id);
    execSQLQuery(`SELECT * FROM usuarios` + filter, res.status(200));
    //let id = req.params.id;
    //res.status(200).send(`Rota GET com ID! ${id}`);
 };