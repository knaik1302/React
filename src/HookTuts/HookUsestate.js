import React, { useState } from "react";

const Hook = () =>{
    let t=0;
    const [myName, setMyName] = useState("hello");

    const changeVal = () => {
        //myName="clicked";
        if(t===0){
            setMyName('clicked');
            t=1;
        }
        else{
            setMyName('again clicked');
            t=0;
        }
        
    }

    return(
        <>
        <h1>{myName}</h1>
        <button onClick={changeVal}>click here</button>
        </>
    )
}

export default Hook;