const express = require('express');
const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'firstdb',
    password:'password',
    port: 5432,
});
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/form.html')
});
app.post('/', (req,res) =>{
    const {name, email} = req.body;
    pool.query('INSERT INTO firsttab (name,email) VALUES($1,$2)',[name,email],(error,results)=>{
    if (error){
        console.log(error);
    }
    else{
        res.status(201).send(`User added `);
    }
});
});
app.listen(3000,()=>
    console.log("server listening on port 3000"));




