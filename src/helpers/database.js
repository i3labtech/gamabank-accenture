const mysql = require("mysql");
const { database } = require("../configs/env");

/** Usada para montar uma conexão com o banco de dados.
 * Não é necessário que ela seja exportada pois todas as funções para mysql ficarão neste arquivo.
 */
const connection = () => {
  return mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.pass,
    database: database.name,
    port: database.port,
  });
};

const execute = (sqlStatement) => {
  const conn = connection();
  return new Promise((resolve, reject) => {
    conn.query(sqlStatement, (err, result) => {
      if (err) reject(err);
      else resolve(result);
      conn.end();
    });
  });
};

module.exports = { execute };
