const express = require("express");


const  PORT = 5000 ;
const app = express();

app.listen( PORT , ()=>console.log( `app is runing on port ${PORT}` ) );
app.get('/' , (req , res) => res.send('dkdkdk'));

