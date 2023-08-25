import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
// this is dynamic method to find the path of dir
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// app.use is used to import any middleware in the server
app.use(bodyParser.urlencoded({extended:true}))

app.post("/submit",(req,res)=>{
  console.log(req.body)
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
