import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let result = await fetch("http://localhost:5000/get-product", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/get-product/${id}`, {
      method: "delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    if (result) {
      alert("record deleted");
      getData();
    }
  };

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      console.log(result);
      if (result) {
        setProducts(result);
      }
    } else {
      getData();
    }
  };

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        type=""
        className="search-product-box"
        placeholder="Search Product"
        onChange={searchHandle}
      />

      <ul>
        <li>S. No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li >
              <button
                style={{
                  backgroundColor: "red",
                  padding: "4px",
                  border: "none",
                  fontSize: "17px",
                  color: "black",
                  display: "inline-block",
                  margin:"2px",
                  cursor:"pointer",
                  

                }}
                onClick={() => deleteProduct(item._id)}
              >
                Delete
              </button>
              <Link
                style={{
                  backgroundColor: "skyblue",
                  padding: "4px",
                  margin:"2px",
                  border: "none",
                  textDecoration:"none",
                  fontSize: "15px",
                  color: "black",
                  display: "inline-block",
                }}
                to={`/update/${item._id}`}
              >
                Update{" "}
              </Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Result Found</h1>
      )}
    </div>
  );
};

export default ProductList;
