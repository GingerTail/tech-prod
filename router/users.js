const express= require("express")
const userSchema= require("./userSchema.js")
const router= express.Router()

router.get("/", async(req,res)=>{
    let filter= req.query;
    const users= await userSchema.find({})
    res.send(users)
})

router.post("/", async(req,res)=>{
    try {
        const newUser= new userSchema(req.body);
        const {_id}= await newUser.save()
        res.send(_id)

    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        const user= await userSchema.FindByIdAndDelete(req.params.id)
        res.send(user)

    } catch (error) {
        res.send(error)
    }
})

module.exports= router