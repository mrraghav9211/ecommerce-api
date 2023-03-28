const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require("./config/conndb.js")
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const cors = require('cors')

dotenv.config()
connectDB();
app.use(express.json());
// app.use(cors({
//     origin:"http://localhost:3000",
//     method:["GET","POST"]
// }))
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
  })
const PORT = process.env.PORT;
app.get('/home',(req, res)=>{
    try {
        res.status(200).json(
            {
                heading:"Welcome to React",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            })
    } catch (error) {
        
    }
});
app.use('/user',userRoutes)
app.use('/products',productRoutes)
app.use('/products/categories',categoryRoutes)
app.listen(PORT,()=>console.log(`Server has started at http://localhost:${PORT}`));