import { useState } from 'react';
import { PostDog } from './functions';

// Cuando exporto con defaul lo puedo importar con el nombre que yo quiera
// Si lo hago sin default lo obligo a usar el mismo nombre debido al destructuring
export const useForm= (initialForm, validateForm) =>  {
    // Los hooks personalizados solo contienen logica, asi que no devuelven codigo JSX, por eso no uso el return
    const [form, setForm] = useState(initialForm);
    // El error si inicializa como un objeto vacio ya que a partir de este se realizara un validacion, si no tiene ningun atributo paso perfecto y podemos mandarlo
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
    // Aqui se recibe lo que se ingresa del teclado
    const handleChange = (e)=> {
        // PAra hacer mas proligio el handleChane
        const {name, value} = e.target; 
        
        setForm({...form, [name]: value})

        // Me va a cambiar el estado de mis errores a travez de una funcion que recibira todo mi form y lo validara
        
        // Para evitar el delay
        let formulario = {...form, [name]:value}
        setErrors(validateForm(formulario))
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()
        setErrors(validateForm(form))
        if(Object.keys(errors).length === 0 && form.name !== "")  {
            setLoading(true)
             await PostDog(form)
            // Este set loading es para mostrar un componente de renderizado
            setLoading(false)
            // El set response es para ver el mensaje de enviado con exito
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



    // un hook puede retornar cualquier estructura de datos JS
    return {
        form, setForm, errors, loading, response, incomplete, handleChange,  handleSubmit
    }
}