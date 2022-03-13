import React from "react";
import Heart from "../SVG/Heart";


const Footer = () => {

    
    return (
        <div className="align-text-bottom  fixed bottom-0 left-0 right-0 flex flex-row justify-center justify-self-center items-center content-center  mt-6">
<p className="mr-3">Made with  </p>
<Heart />
 <p> by <a href="https://thomasleonhighbaugh.me">TLH</a></p>
        </div>
    );
};

export default Footer;