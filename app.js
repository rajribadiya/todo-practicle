const express=require('express')
require('./connection/conn')
const car=require("./models/car")
const app=express()
app.set('view engin','ejs')


app.get("/",async(req,res)=>{
res.render('index')
})


app.post("/add",async(req,res)=>{
    
    try{

        const Todo=await new car({
          name:req.body.name,
          date:req.body.date
        })
       car.save()
       
      }
      catch(err)
      {
        res.send(err)
      }

    })



      app.post("/delete:id",async(req,res)=>{
        try
        {
        const id=req.body.id
        car.remove({_id:id}).then(res.send("delete successfully"))
        }
        catch(err)
        {
            res.send(err)
        }
    })


    app.post('/update:id',async(req,res)=>{
        const id=req.body.id
        const update=await car.findByIdAndUpdate({_id:id},req.body)
    })

    
app.listen(8080,(err)=>{
    
    console.log("connected to 8080")

})