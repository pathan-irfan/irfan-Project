import React from "react";
import './main.css'
import Search from "./Search";
import Card from "./Card";
function Main(){
return(
    <>
    <div className="maiSection">
        <div className="BacgroundImageDiv">
          
          <div className="inputDiv">
           <Search/>
           <Card/>
          
          </div>
         

        </div>
    </div>
    {/* <footer className="footer">
        <center>	<p className="Copyright "> &#169; Copyright TikMe lnc.|Privacy policy </p></center>
    </footer> */}

    </>
)
}export default Main