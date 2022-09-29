const mysql = require('mysql2');


function execSQLQuery(sqlQuery, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Ds123##',
        database: 'cesusc'
    });

    connection.connect((erro) => {
        if(erro) return console.log(erro);
        console.log('conectado');
        createTable(connection);
        adicionaLinhas(connection);    
    });

    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            res.json(results);
        } else {
            res.json(results);
            connection.end;
            console.log('Operação executada com sucesso!');
            
        }
    }); 
    
    
}



function createTable(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS usuarios(
                 ID int NOT NULL AUTO_INCREMENT,
                 NOME VARCHAR(150) NOT NULL,
                PRIMARY KEY (ID)
                );`;

    conn.query(sql, (error, results, fields) => {
        if(error) return console.log(error);
        console.log('CRIOU a TABELA');
    });  
}


function adicionaLinhas(conn) {
    const sql = "INSERT INTO usuarios(Nome) Values ?";
    const Values = [
        ['João das Neves'],
        ['Fernando Raimundo'],
        ['Juliana Costa']
    ];
    conn.query(sql, [Values], (error, results, fields) => {
        if(error) return console.log(error);
        console.log('Registro adicionado!');
        conn.end();
    });
}


module.exports = execSQLQuery;