import {useState} from "react"

function Add(props){
    const [readInput,writeInput] = useState()
    const [readAge,writeAge] = useState()

    function submitForm(e){
        e.preventDefault()
        props.setuserData((prev)=>[...prev,{name:readInput,age:readAge}])
        
    }
    // console.log(readInput,"--->",readAge)
    // console.log(props.userData)

    return(
        <>
        <form onSubmit={submitForm}>
        <input onChange={(e)=>{writeInput(e.target.value)}} value={readInput} type='text'></input>
        <input onChange={(e)=>writeAge(e.target.value)} value={readAge} type='text'></input>
        <button>Submit</button>
        </form>
    </>
    )
}

export default Add