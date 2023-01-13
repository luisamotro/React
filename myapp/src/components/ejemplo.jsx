import React,{Component} from "react";

class Ejemplo extends Component{
    //onClick(), onBlur() y onChange() -> eventos sinteticos
    // STATE: las variables en el, son valor inicial es inmutable, no se puede cambiar el valor, se cambia con setstate

    //este contructor recibe los props
    //los props se guardan en "super"
    //this.state, maneja el estado de alguna cosa
    //encendido: es la  variable a modificar, con el valor "on"
    constructor(props){
        super(props);
        this.state ={
            //valor inicial de variable, que solo cambia con set
            encendido:"off", numero: 0

        }
    }
    
    //actividad
    aumentarnumero =()=>{
        this.setState({ 
            numero: 0+1+2
        });
    }
    cambiarEstado = ()=>{
        //aqui se realiza el cambio de estado con set
        //(se llama a esta funcion, en el boton de abajo)

        if(this.state.encendido==="on"){
            this.setState({ 
                encendido: "off"
            });
        }else{
            this.setState({ 
                encendido: "on"
            });
        }
        
    }

    render(){
        //{this.state.encendido}:es para leer alguna variable de JS 
        return(
            <>
                <p>Estado de la luz: {this.state.encendido} </p>
                <p>Numero en aumento: {this.state.numero} </p>
                <button onClick={()=> alert("Hola mundo") } type="button" className="btn btn-primary" >Click Me</button>
                <button onClick={ this.cambiarEstado} type="button" className="btn btn-success" >Click Me 2</button>
                <button onClick={ this.aumentarnumero} type="button" className="btn btn-secundary" >Click Me 3</button>
            </>
        );
    }
}
export default Ejemplo;