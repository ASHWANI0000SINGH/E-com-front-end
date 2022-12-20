import React, { useState } from "react";

const AddProduct = () => {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [category,setCategory]=useState("");
  const [company,setcompany]=useState("");
  const user=localStorage.getItem("user");
  const userId=JSON.parse(user)._id 
  const [error,setError] = React.useState(false);


  const addProduct=async(e)=>{
    // console.log(name,price,category,company)
    if(!name || !price || !company || !category)
    {
        setError(true);
        return false
    }
   


    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company,userId }),
      headers: {
        "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      },
    });
    result=await result.json();
    alert("product added");

    setName("");
    setPrice("");
    setCategory("");
    setcompany("");


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
      {error && !name && <span className='invalid-input'>Enter valid name</span>}
      <input
        type="number"
        name=""
        id=""
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        className="inputBox"
        placeholder="product price"
      />
      {error && !price && <span className='invalid-input'>Enter valid price</span>}
      <input
        type="text"
        name=""
        id=""
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        className="inputBox"
        placeholder="product category"
      />
      {error && !category && <span className='invalid-input'>Enter valid category</span>}
      <input
        type="text"
        name=""
        id=""
        value={company}
        onChange={(e)=>setcompany(e.target.value)}
        className="inputBox"
        placeholder="product company"
      />
      {error && !company && <span className='invalid-input'>Enter valid company</span>}
      <input onClick={addProduct}  className="appButton" type="submit" value="Add Product" />
    </div>
  );
};

export default AddProduct;
