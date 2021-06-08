const mongoose=require("mongoose")

const carschema=new mongoose.Schema({

    carname:{
        type:String,
        require:true
    },
    Date:
    {
        type:Date
    }
})

const car=mongoose.model('CAR',carschema)
module.exports=car