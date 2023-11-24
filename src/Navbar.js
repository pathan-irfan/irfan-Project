import React from "react";
import './Navbar.css';
import Main from "./Main";
function Navbar(){
    return(
<>
<div className="header" >

    <div className="ImgAndButtonDiv" >
        <img src="https://tikme.co/wp-content/uploads/2023/03/tikme-logo-new.png.webp" alt="..." className="TikImg"/>
      <a href='https://tikme.co/'>  <button className="LoginBtn" >Loging</button></a>
    </div>
   <Main/>
</div>
</>

    )


}export default Navbar