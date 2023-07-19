import "../App.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import "./ok";
import sendGAPage from "./ok";

function Test2() {

const navigate = useNavigate();
useEffect(() => {
  let pageviewObj = {
    title: "230719_대안3_값있음",
    campaign: "ok_campaign",
    source: "ok_source",
    medium: "ok_medium",
    content: "ok_content",
    term: "ok_term",
    event: "ga_page",
  };
  sendGAPage(pageviewObj);
}, []);

    return (
    
      <div className="container">
        <p className="App">테스트 페이지2</p>
        <button id="btn3" onClick={()=>{navigate("/test1")}}> 페이지 이동1 </button>
        <button id="btn3" onClick={()=>{navigate("/")}}> 홈으로 이동 </button>
        <button id="btn3"> 이벤트1 </button>
        <button id="btn3"> 이벤트2 </button>
      </div>
    )
  }
  
export default Test2;