import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import AddProduct from "./components/AddProduct";
import Update from "./components/Update";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route  element={<PrivateComponent/>}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/add" element={<AddProduct />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
            {/* <Route path="/profile" element={<Profile />}></Route> */}
          </Route>

          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
