const express = require('express');
const usersRoutes = require('./src/users/routes');
const onuserRoutes = require('./src/users/on_user/routes')


const app = express();
const port = 3000;

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello world i am here")
})

app.use('/api/users/onuser',onuserRoutes)
app.use('/api/users',usersRoutes)

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`);
})

