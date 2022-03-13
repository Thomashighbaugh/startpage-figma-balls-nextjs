import React from "react";

import Card from "../Card";
import Github from "../SVG/Github";
import Mailbox from "../SVG/Mailbox";
import Reddit from "../SVG/Reddit";
import Twitter from "../SVG/Twitter";

const CardContainer = () => {

    
    return (
        <div className=" flex lg:flex-row flex-col justify-center items-center content-center  mt-6">
         <div className="flex flex-row ml-0 mr-0">   
        <Github/>
        <Reddit/>
        <Mailbox/>
        </div>
<div className="lg:mt-0 mt-6 ml-0 mr-0">
        <Twitter/>
</div>
        </div>
    );
};

export default CardContainer;