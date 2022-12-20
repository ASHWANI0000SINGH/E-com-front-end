import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Update = () => {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [category,setCategory]=useState("");
  const [company,setcompany]=useState("");
  const user=localStorage.getItem("user");
  const userId=JSON.parse(user)._id 
  const naviagte=useNavigate();
 const params= useParams();
 useEffect(()=>{
  // console.log(params);
  getProductWithId();
},[])

  const getProductWithId=async()=>{
    let result = await fetch(`http://localhost:5000/get-product/${params.id}`,{
      headers:{
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result=await result.json();
    // console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setcompany(result.company);

  }

  const updateProduct=async()=>{
    // console.log(name,price,category,company);
    let result = await fetch(`http://localhost:5000/get-product/${params.id}`,{
      method: "Put",
      body: JSON.stringify({ name, price, category, company,userId }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`


      },
    });
    result=await result.json();
    // console.log(result);
if(result){
  naviagte("/");

}

  }
  
  return (
    <div className="product">
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="inputBox"
        placeholder="product name"
      />
      <input
        type="number"
        name=""
        id=""
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        className="inputBox"
        placeholder="product price"
      />
      <input
        type="text"
        name=""
        id=""
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        className="inputBox"
        placeholder="product category"
      />
      <input
        type="text"
        name=""
        id=""
        value={company}
        onChange={(e)=>setcompany(e.target.value)}
        className="inputBox"
        placeholder="product company"
      />
      <input onClick={updateProduct}  className="appButton" type="submit" value="Update Product" />
    </div>
  );
};

export default Update;
