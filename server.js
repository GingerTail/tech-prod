const express = require("express")
var cors = require("cors")
const mongoose = require("mongoose")
const UserRouter= require("./router/users")

const connectionString = `mongodb+srv://gingerAdmin:Password.123@gingergames-2fpe3.mongodb.net/test?retryWrites=true&w=majority`

const connection = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:"userlist"
})
connection.then(db =>{
    console.log("database connected")
},
err=>{console.log(err)}
)
var server = express();

server.set("port", process.env.PORT || 4000)
server.use(cors())
server.use(express.json())

server.use("/users", UserRouter)



server.listen(3450, ()=>{
    console.log("SERVER IS RUNNING")
})
server.get(server.get("port"), (req, res) => {
    res.send("Hello")
  })