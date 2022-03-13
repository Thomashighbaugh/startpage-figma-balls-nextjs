import React from "react";
import Image from "next/image";

const Card = (props) => {
    return (
        
            
            <div className="w-12p ml-6">
               
                    <a href={props.link} className="block border-4 bg-purple-500  border-purple-500 dark:bg-white dark:border-white  rounded-lg   p-0 m-0 text-center lg:ml-2 ml-4 ">
                        <div className=" m-0 pl-6 pr-6 pt-3 pb-3 bg-white dark:bg-purple card rounded-md ">
                     {props.children}
                       </div>
                        <h3 className="justify-center align-bottom text-white dark:text-gray-900 text-lg pt-2 pb-0 mb-0 ">{props.name}</h3>
                    </a>
           
            </div>
        
    );
};

export default Card;