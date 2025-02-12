import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const port = process.env.PORT || 4000
const app =express()

app.use(express.json())
app.use(cors())


await connectDB() 

app.use('/api/user',userRouter); 
app.use('/api/image',imageRouter); 
app.get('/',function(req,res){
  res.send('API working');
}) 

app.listen(port,()=>{
    console.log(' Server is running on port',port);
});