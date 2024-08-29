const express=require("express")
const app=express();

const ownersRouter=require("./Routes/ownersRouter")
const productsRouter=require("./Routes/productsRouter")
const usersRouter=require("./Routes/usersRouter")


const cookieParser=require("cookie-parser");
const path=require("path")

const db=require("./Config/mongooseConnection");


app.use (express.json());

app. use(cookieParser ());

app. set ("view engine", "ejs");




app.use("/users",usersRouter)
app.use("/owner",ownersRouter)
app.use("/products",productsRouter)


app.listen(3000)