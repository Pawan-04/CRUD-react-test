// import { useState } from "react";
import {contextVar} from '../Wrapper.jsx'
import { useContext } from 'react'

function Read(){
     const[userData,setUserData] = useContext(contextVar)
    function del(index){
    
        const newData = userData.filter((elem,i) => i != index)
    //     props.setuserData((prev)=> prev.filter((elem,i)=> i != index)
    // )
    setUserData(newData)
    }

    var list = userData.map((row,index)=>{
        return(
            <div key={index}>{row.name} || {row.age} <span><button id={index} onClick={()=>{del(index)}}>Delete</button></span></div>
    )
    })

    //Delete Logic

    return(
        <>
        {list}
        </>
    )

}

export default Read