
import { useForm } from "react-hook-form"

function Add(props){
    const {register,
        handleSubmit,
        reset,
        formState: {errors}
        
    } = useForm()
    

    function submitForm(data){
        props.setuserData((prev)=> [...prev,{name:data.userName,age:data.userAge}])
        reset();
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