import React from "react"

export default function Cuenta(){

    const [formValues, setFormValues] = React.useState({
        user :"",
        password: "",

    })

    const handleOnChange =(event) => {
        const {name, value} = event.target
        setFormValues(formValues,{[name] : value})
    }
    const[user, setUser] =React.useState("")
    const [password, setPassword] =  React.useState("")
    const handleSubmit = (e) =>{
        // eslint-disable-next-line no-restricted-globals
        Event.preventDefault()
        alert("La acción ha sido ejecutada")
    }
    return(
        <div>
            <h1>Tu cuenta</h1>
            <form className="form1" onSubmit={handleSubmit}>
                <label>Usuario</label>
                <input name="user" type="text" onChange={handleOnChange}/>
                <label>Contraseña</label>
                <input name="password" type="password"onChange={handleOnChange}/>
                <input type="submit" value="Enviar "/>
            </form>
        </div> 
    )
}