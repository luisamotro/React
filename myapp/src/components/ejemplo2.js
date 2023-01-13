import { useState } from "react";

function Ejemplo2(){
//Uso de useState
//[nombre_variable, set+nombre_variable]
    const [texto,setTexto]= useState("parrafo 1+1");
   // var texto = "";
   // texto ="texto modificado";
    const [valorinput,setValorinput]= useState(null);

    function modificarParrafo(){
        //setTexto("texto modificado");
        setTexto(valorinput);
    }

    function capturaDatos(e){
        //e.target.value -> captura cada una de los caracteres ingresados
        console.log(e.target.value);
        //setTexto(e.target.value);
        setValorinput(e.target.value);
    }

    return(
        <>
            <p><h2> parrafo 1 {texto} </h2></p>
            <input type="text" className="form-control"  onChange={capturaDatos}></input>
            <button className="btn btn-success" onClick={modificarParrafo} >Modificar</button>
        </>
    );
}
export default Ejemplo2;