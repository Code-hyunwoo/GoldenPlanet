import { useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import "./ok";
import sendGAPage from "./ok";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    let pageviewObj = {
      title: "230719_대안2_값있음",
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
      <p className="App">OK 캠페인 테스트</p>
      <button
        id="btn1"
        onClick={() => {
          navigate("/test1");
        }}
      >
        {" "}
        페이지 이동1{" "}
      </button>
      <button
        id="btn1"
        onClick={() => {
          navigate("/test2");
        }}
      >
        {" "}
        페이지 이동2{" "}
      </button>
      <button id="btn1"> 이벤트1 </button>
      <button id="btn1"> 이벤트2 </button>
    </div>
  );
}

export default Home;
