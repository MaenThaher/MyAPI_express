const express = require('express');
const studentRoutes = require('./src/student/routes');
const usersRoutes = require('./src/users/routes');

const app = express();
const port = 3000;

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello world i am here")
})


app.use('/api/v1/users',usersRoutes)
app.use('/api/v1/students',studentRoutes)

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`);
})

