import React from "react";

const Card =({name , id, email})=>{
    return(
        <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw6 shadow-8">
            <img src={`https://robohash.org/${id}?100*100`} alt="robot"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;