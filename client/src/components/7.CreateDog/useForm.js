import { useState } from 'react';
import { PostDog } from './functions';


export const useForm= (initialForm, validateForm) =>  {
   
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [incomplete, setIncomplete] = useState(false);

    const correctSendClean = {
        name: "",
        height_min: 0,
        height_max: 0,
        weight_min: 0,
        weight_max: 0,
        min_life: 0,
        max_life: 0,
        temperaments: [],};

    const handleChange = (e)=> {

        const {name, value} = e.target; 
        
        setForm({...form, [name]: value})
        let formulario = {...form, [name]:value}
        setErrors(validateForm(formulario))
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()
        setErrors(validateForm(form))
        if(Object.keys(errors).length === 0 && form.name !== "")  {
            setLoading(true)
             await PostDog(form)
            setLoading(false)
            setResponse(true)
            setForm(correctSendClean)
            setTimeout(() => {
                setResponse(false)
            }, 5000);
        } else {
            setIncomplete(true)
            setTimeout(()=> {
                setIncomplete(false)
            }, 7000)
            return 
        }
    }



    return {
        form, setForm, errors, loading, response, incomplete, handleChange,  handleSubmit
    }
}