import { useState } from "react";

function Button() {
    const [nameStudent, setNameStudent] = useState("Rafael")
    const showNameStudent = () =>{
        //nameStudent = "Gael"
        setNameStudent("Gael")
    }
    return (
        <>
            <h1>Ejemplo de boton</h1>
            {nameStudent}
            <button className="btn btn-primary" onClick={showNameStudent}>Dar clic</button>
        </>
    )
}

export default Button; //exportamos la función Button para poder utilizarla en otros componentes de nuestra aplicación