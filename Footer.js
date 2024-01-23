import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div>
    <div className="footerdiv">
         <p >Copyright ⓒ {currentYear}</p>
    </div>
    </div>
   
   
  
  );
}

export default Footer;