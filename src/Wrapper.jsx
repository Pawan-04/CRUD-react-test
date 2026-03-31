import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const contextVar = createContext(null)
const Wrapper = (props) => {

    const[userData,setUserData] = useState([
    {name:'pawan',age:15},
    {name:'Shyamn',age:23},
    {name:'Sam',age:19}
    ])
    
return (
    <contextVar.Provider value = {[userData,setUserData]}>
        {props.children}
    </contextVar.Provider>
    
)
}
export default Wrapper
