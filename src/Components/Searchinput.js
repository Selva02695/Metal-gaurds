import React from "react";

const Searchinput= ({onsearchchange}) =>{
    return(
        <div className="pa3 tc">
            <h1 style={{color:'white'}}>METAL GAURDS</h1>
            <input type={'search'} placeholder={'search'} onChange={onsearchchange} className="pa3 ba b--green bg-lightest-blue"></input>
        </div>
    )
}

export default Searchinput;