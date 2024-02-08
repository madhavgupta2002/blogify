const express=require('express');
const path=require("path");
const userRoute=require('./routes/user')
const mongoose=require("mongoose")
const app=express();
const PORT=8000;

app.get('/', (req, res)=>{
    res.render('home')
})

mongoose.connect("mongodb://127.0.0.1:27017/blogify")
.then((e) => console.log("MongoDB connected"))
.catch(error => console.error("Error connecting to MongoDB:", error));

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

app.use(express.urlencoded({extended: false}));

app.listen(PORT, ()=>console.log(`SErver Started at port: ${PORT}`));
app.use('/user', userRoute)