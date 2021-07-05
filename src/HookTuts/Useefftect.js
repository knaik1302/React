import React, {useState,useEffect} from 'react';

const Useefftect = () => {
    // useeffect usefull to access the outside box content that is outside functional components
    // when use console.log and useeffect funtion priority given to useeffect first and then console
    //whenever you have 1< useffect funtion, the top funtion will call first
    //whenever reload the page useeffect definitely executes.
    //whenever rerender the page the useeffect executes as well and that can be controlled by dependency array
    //comment one of useeffect funtion, and see use of dependancy array
    const [chat, setChat] = useState(0);

    // useEffect(()=>{ // there are rules to using useeffect funtion
    //     if(chat !=0)
    //         document.title=`Notification (${chat})`
    //     else
    //         document.title=`Whatspp` 
    // }) // without dep array

    useEffect(()=>{ 
        if(chat !=0)
            document.title=`Notification (${chat})` 
    },[chat]) //depency array, if chat list changes then only this useeffect will execute but at first reloading page, it will definetly execute

    return (
        <div>
            <div className="text-center">
                <h1>{chat}</h1>
                <button className="btn btn-info" onClick={()=>setChat(chat+1)}>Notification</button>
            </div>
        </div>
    )
}

export default Useefftect
