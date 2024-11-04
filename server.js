const express = require('express');
const usersRoutes = require('./src/users/sport_product/routes');
const onuserRoutes = require('./src/users/on_user/routes')
const transactionRoutes = require('./src/users/transaction/routes')
const noticeRoutes = require('./src/users/notice/routes')


const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors())

//app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello world i am here")
})

app.use('/api/users/onuser',onuserRoutes)
app.use('/api/users/sport',usersRoutes)
app.use('/api/users/transaction',transactionRoutes)
app.use('/api/users/notice',noticeRoutes)

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`);
})

