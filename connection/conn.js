const mongoose=require('mongoose')
const url="mongodb://localhost:27017/TODO"
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true})
.then(()=>{
    console.log("connected to monggose")
})
.catch((err)=>{
    console.log("connection err "+err)
})