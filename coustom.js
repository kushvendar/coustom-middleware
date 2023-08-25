import morgan from "morgan";
import express from "express";

const app=express();
const port=3000;
//morgan give the detail of the syslog
app.use(morgan("short"));

app.get("/",(req,res)=>{
  res.send("hello")  
})

app.listen(port,()=>{
    console.log(`${port} is running a http server`);
})