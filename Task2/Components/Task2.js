
import React from "react";
import Img1 from './Image/realmadrid.png';
import Img2 from "./Image/barcelona.png";

function Task2(){
return(

    <>
  
  <div className="Container">
    <div className="Card">
        <h1>UEFA Champions League</h1>
      <img src={Img1} alt="RealMadrid" className="img1"/>
      <img src={Img2} alt="FC Barcelona" className="img2"/>
    </div>
  </div>

    </>
)

}
export default Task2;