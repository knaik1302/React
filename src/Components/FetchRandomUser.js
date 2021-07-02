import React, { useEffect, useState } from "react";

const FetchRandomUser = () => {

    const [users, setUsers] = useState([]);

    const getUser = async() =>{
        const response = await fetch('https://api.randomuser.me/');
        setUsers(await response.json());
        console.log(users.results[0]);
    }
    
    useEffect(() => {
        getUser();
    }, []);

    return(
        <>
            <h2>Random User</h2>
            <div>
                 <div>
                     <button>Fetch Data</button>
                   <h4>NAME : <span>{users.results[0].name.first}</span></h4>
                    <h4>GENDER : <span>{users.results[0].gender}</span></h4>
                    <h4>DOB : <span>{users.results[0].dob.date}</span></h4>
                    <img/>
                 </div>
            </div>
        </>
    )
}
export default FetchRandomUser;