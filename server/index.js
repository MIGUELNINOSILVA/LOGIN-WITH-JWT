const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/AuthRoutes.js');

const app = express();
const cookieParser = require('cookie-parser');

app.listen(4000,()=>{
  console.log("Server is running on port 4000");
});

mongoose.connect("mongodb+srv://artemis:12345@facturartemisv1cluster.i4xiw4n.mongodb.net/jwt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("MongoDB connected");
}).catch((err)=>{
  console.log(err);
});


app.use(cors({
  origin: 'http://localhost:3000',
  method: ['GET','POST'],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);