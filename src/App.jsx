import React from 'react';
import { useContext } from 'react'
import {contextVar} from './Wrapper.jsx'
import { ToastContainer, toast } from 'react-toastify';
import Read from './components/Read.jsx'
import Add from "./components/Add.jsx"




function App() {
  const[userData,setUserData] = useContext(contextVar)
  

return (
  <>
  <ToastContainer/>
  <Read ></Read>
  <Add ></Add>
  
  </>
)
}

export default App
