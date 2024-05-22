const mongoose=require("mongoose");
exports.connectMongoose=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017").then((e)=>{
        console.log("Connected to MongoDB");
    }).catch((e)=>{
        console.log(e)
    })
}

const userSchema=new mongoose.Schema({
   email:String,
   password:String
})
const noteSchema=new mongoose.Schema({
    
    Content:String,
    email:String
})
const ChatSchema=mongoose.Schema({

    from:String,
    to:String,
    Content:String
})
exports.chats=mongoose.model("chats",ChatSchema);
exports.note=mongoose.model("notes",noteSchema)
exports.User1=mongoose.model("user1",userSchema);