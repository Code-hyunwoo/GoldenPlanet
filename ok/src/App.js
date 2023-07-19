
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Test1 from "./routes/Test1";
import Test2 from "./routes/Test2";

function App() {


  return (
  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test1" element={<Test1 />}></Route>
          <Route path="/test2" element={<Test2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
