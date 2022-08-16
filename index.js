
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/form.html')
});
app.post('/',(req,res)=>{
console.log(req.body.name);
console.log(req.body.email);

res.sendStatus(200);
});
app.listen(3000);
console.log("server listening on port 3000");
