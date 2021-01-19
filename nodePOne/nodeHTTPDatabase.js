const mysql = require('mysql')
const express = require('express')
const app = express()
// 建立本地网站
// const app = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello world!");
//   });
// app.listen(3000, "localhost");

// 连接数据库
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'Fnj5!zhiyuan',
    database: 'nodeprojectone',
})

// 验证是否连接成功
connection.connect((err) => {
    if(err){
        throw err
    }
    console.log('Connected!')
});

app.listen(3000, () => {
    console.log('服务器3000端口')
})


app.get('/createdb',(req, res) => {
    var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.end("Hello world!");
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('err')
            throw err
        } 
        else{
            console.log(result)
            result.sent("Success")
        }
    })
})
// connection.end()