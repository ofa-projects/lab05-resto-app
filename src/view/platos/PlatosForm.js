import React from 'react';
import {FormGroup, ControlLabel, Button,FormControl} from 'react-bootstrap';

class PlatosForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.onAddPlato(this.txtNombre.value, this.txtPrecio.value);
        this.txtNombre.value = '';
        this.txtPrecio.value = '0.0';
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
                        type="text"
                        inputRef={(input) => { this.txtNombre = input; }}
                        placeholder="Nombre..."
                    />
                </FormGroup>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Precio</ControlLabel>
                    <FormControl
                        type="number"
                        inputRef={(input) => { this.txtPrecio= input; }}
                        placeholder="Precio..."
                    />
                </FormGroup>
                <Button bsStyle="primary" type="submit">Agregar</Button>
            </form>
        </div>
        );
    }
}

export default PlatosForm;
