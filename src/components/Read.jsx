import { useState } from "react";

function Read(props){

    function del(index){
        props.setuserData((prev)=> prev.filter((elem,i)=> i != index)
    )
    }

    var list = props.userData.map((row,index)=>{
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