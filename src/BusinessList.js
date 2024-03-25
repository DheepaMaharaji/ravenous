import React from "react";
import { Business } from "./Business";

function BusinessList(){
    const listOfBusiness= Business.map((x,i)=>{
        return (
            <div className={"pizza"+i}>
            <img src={x.img} height={200} width={200}  />
            <div>{x.name}</div>
            <div>{x.address}</div>
            <div>{x.city}</div>
            <div>{x.state +" "+x.zipcode}</div>
            
            </div>
               );
    })
    return <ul>{listOfBusiness}</ul>;
}
export {BusinessList};