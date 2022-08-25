const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
let items=["start the homework","cook","eat lunch"];
let workitems=[];
app.get("/",(req,res)=>{
    let day=new Date();
    let options={
     weekday: "long",
     month: "long",
     day: "numeric"
    };
    let typeOfDay=day.toLocaleString("en-US",options);
    res.render("list",{listTitle:typeOfDay, tasks:items});
})
app.post("/",(req,res)=>{
    let item=req.body.additem;
    console.log(req.body.typeList);
    if(req.body.typeList==="Work")
    {
        workitems.push(item);
        res.redirect("/work");
    }
    else{
    items.push(item);
    res.redirect("/");
    }
})
app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",tasks:workitems});
})
app.listen(3000,()=>{
    console.log("server is running on port on 3000");
})