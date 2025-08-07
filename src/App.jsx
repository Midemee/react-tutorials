import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import More from "./Pages/More";
import SimpleProps from "./Components/SimpleProps";
import Product from "./Components/Product";
import Conditionals from "./Components/Conditionals";
import SimpleList from "./Components/SimpleList";
import SimpleState from "./Components/SimpleState";
import SimpleForm from "./Components/SimpleForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/more" element={<More />}/>
        <Route path="/SimpleProps" element={<SimpleProps />}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Conditionals" element={<Conditionals/>}/>
        <Route path="/simplelist" element={<SimpleList/>}/>
        <Route path="/simplestate" element={<SimpleState/>}/>
        <Route path="/simpleform" element={<SimpleForm/>}/>
      </Routes>
    </>
  );
}

export default App;
