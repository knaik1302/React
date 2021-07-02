import React, {useState} from 'react'

const HookObject = () => {
    const clgreg=
    {
        id:0, 
        name:'kartik', 
        reg:123,
        district:"Dakshina kannada",
        pin:574110
    }
    
    const [myDet, setMyDet]= useState(clgreg);
    // console.log(clgreg);

    const reset = () =>{
        setMyDet({...myDet, name:"krithika", reg: 456});
    }
    return (
        <>
            <div className="container text-center" key={myDet.id}>
                <h3>NAME: {myDet.name}</h3>
                <h3>REG_NUMBER: {myDet.reg}</h3>
                <h3>DISTRICT: {myDet.district}</h3>
                <h3>PIN: {myDet.pin}</h3>
            </div>
            <div className="container text-center">
                <button className="btn btn-md btn-success" onClick={reset}>Update</button>
            </div>
        </>
    )
}

export default HookObject
