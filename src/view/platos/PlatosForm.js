import React from 'react';
import {FormGroup, ControlLabel, Button,FormControl} from 'react-bootstrap';

class PlatosForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);        
        this.state={nombre:'',precio:0.0};
    }

    handleSubmit(evt){
        console.log(evt);
        evt.preventDefault();
        this.props.onAddPlato(this.txtNombre.value, this.txtPrecio.value);
        this.txtNombre.value = '';
        this.txtPrecio.value = '0.0';
    }
    componentDidMount() {
        console.log(this.props.platoEditar);
        let nombreDefecto = this.props.platoEditar?this.props.platoEditar.nombre:"un plato";
        let precioDefecto = this.props.platoEditar?this.props.platoEditar.precio:"99.99";
        this.setState({nombre:nombreDefecto,precio:precioDefecto });
    }

     handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
    render() {
        return (
        <div>
            <h1>Informacion del Plato</h1>
            <form onSubmit={this.handleSubmit}>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Nombre del Plato</ControlLabel>
                    <FormControl
                        name="nombre"
                        type="text"
                        inputRef={(input) => { this.txtNombre = input; }}
                        placeholder="Nombre..."
                        value={this.state.nombre}                   
                         onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Precio</ControlLabel>
                    <FormControl
                        name="precio"
                        type="number"
                        inputRef={(input) => { this.txtPrecio= input; }}
                        placeholder="Precio..."
                        value={this.state.precio}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <Button bsStyle="primary" type="submit" id="btn">Agregar</Button>
            </form>
        </div>
        );
    }
}

export default PlatosForm;
