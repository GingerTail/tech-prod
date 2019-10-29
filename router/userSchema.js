const mongoose=require("mongoose")
const {Schema}=require("mongoose")

const userSchema = new Schema({
        email:{
            type:String,
            required:true
        }

})

const Users = mongoose.model("user", userSchema)
module.exports= Users