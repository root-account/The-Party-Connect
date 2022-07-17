import mysql from "mysql";

var connection = mysql.createConnection({
    port:3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'party_connect'
})

connection.connect((err)=>{
    if (!err) {
        console.log("Connected to DB");
    }else{
        console.log("could not connect to DB");
    }
})

// module.exports =  connection;

export default connection;