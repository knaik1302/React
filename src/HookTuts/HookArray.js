import React, { useState } from 'react'

const HookArray = () => {
    const clgreg=[
        {id:0, name:'kartik', reg:123},
        {id:1, name:'gourav', reg:234},
        {id:2, name:'hritik', reg:345}
    ]
    
    const [myDet, setMyDet]= useState(clgreg);
    // console.log(clgreg);

    const reset = () =>{
        setMyDet([]);
    }

    return (
        <div>
            {
                myDet.map((std)=>{
                    return(
                        <div className="container text-center" key={std.id}>
                            <h3>NAME: {std.name}  REG_NUMBER: {std.reg}</h3>
                      </div>
                    )
                })
            }
            <div className="container text-center">
                <button className="btn btn-md btn-success" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default HookArray;
