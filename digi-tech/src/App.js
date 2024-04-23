import Header from "./components/Header";
import Headphones from "./components/Headphones";
import Footer from "./components/Footer";
// import Slider from "./components/Slider";
// import Card from "./components/body/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Laptop from './components/Laptop';
import AddressForm from '../src/components/checkout/AdressForm';
import Checkout from '../src/components/checkout/Checkout';
import { ReactDOM } from "react";
// import PrivateC from './components/PrivateC';

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<PrivateC/>}> */}
          <Route path="/" element={<Header/>}></Route>
          <Route path="/headphones" element={<Headphones/>}></Route>
          {/* </Route> */}
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/addproduct" element={<AddProduct/>}></Route>
          <Route path="/laptop" element={<Laptop/>}></Route>
          <Route path="/checkOut" element={<Checkout/>}></Route>
          <Route path="/addressForm" element={<AddressForm/>}></Route>
          
          {/* <Route path="/" element={<h1>Product Listing</h1>}></Route> */}
        </Routes>
        {/* <Slider/> */}
        {/* <Card/> */}
      </BrowserRouter>
      {/* <SignUp/> */}
    </div>
  );
 
}
export default App;
