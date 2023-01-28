import React from "react";
import Card from "./Card";


const Cardlist = ({robots}) => {
    const cardArray = robots.map((user,i)=>{
        return <Card key ={i} name={robots[i].name} id={robots[i].id} email={robots[i].email} />

    })
    return (
        <div>
           {cardArray} 
        </div>
    )
}

export default Cardlist;