const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'userone',
    password: 'passone',
    database: 'mytestdb'
})

function getAllPersons () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM persons`,
            function (err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}

function addNewPerson(name, age, city) {
    
    return new Promise(function (resolve, reject) {
        connection.query(
            `INSERT INTO persons (name, age, city) VALUES(?, ?, ?)`,
            [name, age, city]
        )
    })
}

exports = module.exports = {
    getAllPersons //exported to server.js
}