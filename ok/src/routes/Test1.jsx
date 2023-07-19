import "../App.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import "./ok";
import sendGAPage from "./ok";

function Test1() {

const navigate = useNavigate();
useEffect(() => {
  let pageviewObj = {
    title: "230719_대안2_값없음",
      // campaign: "",
      // source: "",
      // medium: "",
      // content: "",
      // term: "",
    event: "ga_page",
  };
  sendGAPage(pageviewObj);
}, []);

    return (
    
      <div className="container">
        <p className="App">테스트 페이지1</p>
        <button id="btn2" onClick={()=>{navigate("/test2")}}> 페이지 이동2 </button>
        <button id="btn2" onClick={()=>{navigate("/")}}> 홈으로 이동 </button>
        <button id="btn2"> 이벤트1 </button>
        <button id="btn2"> 이벤트2 </button>
      </div>
    )
  }
  
export default Test1;