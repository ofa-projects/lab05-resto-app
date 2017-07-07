import React from 'react';
import FormInput from '../commons/FormInput';
import {FormGroup, ControlLabel, Button,FormControl} from 'react-bootstrap';

class PlatosForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.actualizar = this.actualizar.bind(this);
        this.state={habilitado:false,editando:false};
    }

    handleSubmit(evt){
        evt.preventDefault();
        if(this.state.boton==="nuevo"){
            this.props.nuevo();
        }
        if(this.state.boton==="guardar"){
            if(this.state.editando){
                console.log("actualizar");
            }else{
                console.log("AGREGAR");
                //agregar
                this.props.onAddPlato();
            }
            this.setState({habilitado:false});
        }
       // this.props.onAddPlato(this.txtNombre.value, this.txtPrecio.value);
       
    }

    actualizar(atributo,valor){
        this.props.actualizarPlato(atributo,valor);
    }

    render() {
        return (
        <div>
            <h1>Informacion del Plato</h1>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    nombre="nombre"
                    editable={this.state.habilitado}
                    valor={this.props.platoEditar.nombre} 
                    actualizar={(n,v) => this.actualizar(n,v) }
                    etiqueta="Nombre del plato">
                </FormInput>

                <FormInput 
                    nombre="precio"
                    editable={this.state.habilitado}                    
                    tipo="nro" 
                    actualizar={(n,v) => this.actualizar(n,v) }                    
                    valor={this.props.platoEditar.precio} 
                    etiqueta="Precio">
                </FormInput>

                <Button bsStyle="primary"  type="submit" onClick={() => this.setState({boton: 'nuevo',editando:false,habilitado:true})} id="btn">Nuevo</Button>
                <Button bsStyle="primary"  type="submit"  onClick={() => this.setState({boton: 'guardar'})} id="btn">Guardar</Button>
                <Button bsStyle="primary"  onClick={() => this.setState({boton: 'editar',editando:true,habilitado:true})} id="btn">Editar</Button>

            </form>
        </div>
        );
    }
}

export default PlatosForm;
