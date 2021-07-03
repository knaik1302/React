import React, { useState } from 'react'

const Hookform = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const [newallArray, setNewallArray] = useState([]);

    const submitform=(e)=>{
        if(email && password){
            e.preventDefault();
            const newEntry={id:new Date().getTime().toString(), email, password}; // if key and value are same no need to write both ex: email:email
            setNewallArray([...newallArray, newEntry]);
    
            setEmail("");
            setPassword("");
        }
        else{
            alert("please fill all details");
        }
        
    }    

    return (
        <div>
            <form action="" className="container" onSubmit={submitform}>
                <div className="text-center">
                    <div>
                        <label htmlFor="email">EMAIL : </label>
                        <input type="email" name="email" id="email" autoComplete="off"
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <p></p>
                    <div>
                        <label htmlFor="password">PASSWORD : </label>
                        <input type="password" name="password" id="password" autoComplete="off"
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <p></p>
                    <button className="btn btn-info">login</button>
                </div>
            </form>
            <p></p>
            <div className="container text-center">
                {
                    newallArray.map((curElm)=>{
                        const {id, email, password}=curElm;
                        return(
                        <div key={id}>
                        <h5><b>Email </b>: {email} & <b> password </b>: {password}</h5>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Hookform
