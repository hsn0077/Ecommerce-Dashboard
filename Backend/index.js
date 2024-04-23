const express = require("express");
// const mongoose = require("mongoose");
require('./db/config');
const User = require('./db/users');
const Product = require('./db/Product');
const Admin = require('./db/admin');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors(
  {
    origin: ["https://ecommerce-dashboard-frontend-khaki.vercel.app"],
    methods: ['POST', 'GET', 'DELETE'],
    credentials: true
  }
));

app.post("/register", async (req,resp)=>{
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp)=>{
  if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
    if(user){
      resp.send(user)
    }else{
      resp.send({result: "Not found"})
    }
  }else{
    resp.send({result: "not found"})
  }
});

app.post("/admin", async (req, resp)=>{
  if(req.body.password && req.body.email){
    let admin = await Admin.findOne(req.body).select("-password");
    if(admin){
      resp.send(admin)
    }else{
      resp.send({result: "Not found"})
    }
  }else{
    resp.send({result: "not found"})
  }
});

app.post("/add-product", async (req, resp) =>{
  let product = new Product(req.body)
  let result = await product.save();
  resp.send(result);
})

app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if(products.length>0){
    resp.send(products)
  }else{
    resp.send({result:"No Products Found"})
  }
});

app.delete("/products/:id", async (req,resp)=> {
  const result = await Product.deleteOne({_id:req.params.id})
  resp.send(result);
});


// const connectDB = async () => {
//   mongoose.connect('mongodb://127.0.0.1:27017/Hassan');
//   const productSchema = new mongoose.Schema({});
//   const product = mongoose.model('datas',productSchema);
//   const data= await product.find();
//   console.warn(data);
// }
// connectDB();
app.listen(5000);
