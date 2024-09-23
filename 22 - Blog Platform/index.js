const express = require("express");
const app = express();
const path = require("path");
const {v4 : uuidv4} =require("uuid");
const methodOverride = require("method-override");

const port = 3000;

app.use(express.urlencoded({ extended :true}));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let blogs = [
    {
        id :uuidv4(),
        image:"/images/img1.png",
        title:"Apna college",
        image:"/images/img4.png",
        description:"A learning platform where student can connect and learn coding!!"
    },
    {
        id:uuidv4(),
        image:"/images/img1.png",
        title:"Sneha Gupta",
        description:"I am a coder and i love dancing..",
    },
    {
        id :uuidv4(),
        image:"/images/img2.png",
        title:"Apna college",
        description:"A learning platform where student can connect and learn coding!!"
    },
    {
        id:uuidv4(),
        image:"/images/img3.png",
        title:"Sneha Gupta",
        description:"I am a coder and i love dancing..",
    },
]
app.get("/blog",(req,res) =>{
   res.render("home.ejs", {blogs});
});

app.get("/blog/new",(req,res) =>{
    res.render("create.ejs");
});

app.post("/blog",(req,res) => {
   let {title,description}=req.body;
   let id = uuidv4();
    blogs.push({id,title,description});
    res.redirect("/blog");
});

app.get("/blog/:id",(req,res) => {
    let{id} = req.params;
    let blog = blogs.find((p) => id ===p.id);
    res.render("show.ejs",{blog});
});

app.patch("/blog/:id",(req,res) =>{
    let {id} = req.params;
    let newContent = req.body.description;
    let blog = blogs.find((p) => id===p.id);
    blog.description = newContent;
    console.log(blog);
    res.redirect("/blog");
});

app.get("/blog/:id/edit",(req,res) =>{
    let{id} = req.params;
    let blog = blogs.find((p) => id === p.id);
    res.render("edit.ejs",{blog});
});

app.delete("/blog/:id",(req,res) => {
    let{id} = req.params;
     blogs = blogs.filter((p) => id !== p.id);
    res.redirect("/blog");
});

app.listen(port,() =>{
    console.log(`Listening to the port ${port}`);
});