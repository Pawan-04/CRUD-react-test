import { toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import {contextVar} from '../Wrapper.jsx'

function Add(){

    const[userData,setuserData] = useContext(contextVar)

    const {register,
        handleSubmit,
        reset,
        formState: {errors}
        
    } = useForm()
    

    function submitForm(data){
        console.log(data)
        const addData = [...userData,{name:data.userName,age:data.userAge}]
        setuserData(addData)
        reset();
        toast.success("Form submitted successfully")
    }
    


    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <input {...register('userName',{required:true})}></input>
        {errors.userName && alert('User Name required')}
        <input {...register('userAge', {required:true})}></input>
        <button>Submit</button>
        </form>
    </>
    )
}

export default Add