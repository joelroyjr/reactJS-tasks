import React, { Component } from "react";

import Img from "./Image/zoro.png";
import Img1 from "./Image/watch.png";
const Home = () => {
  return (
    <>
      {/* <h1>Class Components</h1> */}
      <div class="main">
        <h6 class="head">CONGRATULATIONS</h6>
        <div class="card">
          {/* <img src={Img} className="imgclass"/> */}
            <img src={Img} class="imgclass" alt="..." />        
            <h5 class="cardtitle">Joel Roy</h5>
            <p class="card-text">
              KG COLLEGE OF ARTS AND SCIENCE , COIMBATORE
            </p>
            <img src={Img1} class="imgclass" alt="..." />      
        </div>
      </div>
    </>
  );
};
export default Home;