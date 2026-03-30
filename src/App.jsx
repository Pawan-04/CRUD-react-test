import { useState } from 'react'
import Read from './components/Read.jsx'
import Add from "./components/Add.jsx"



function App() {
  const[userData,setuserData] = useState([
  {name:'pawan',age:15},
  {name:'Shyamn',age:23},
  {name:'Sam',age:19}
])

return (
  <>
  <Read userData={userData} setuserData={setuserData}></Read>
  <Add setuserData={setuserData} userData={userData}></Add>
  
  </>
)




  
}

export default App
