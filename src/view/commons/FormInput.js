import React from 'react';
import { FormGroup,ControlLabel, FormControl} from 'react-bootstrap';

class  FormInput extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        let tipo="text";
        if(this.props.tipo==="nro")  tipo="number";
        return (
            <FormGroup controlId="formBasicText">
                <ControlLabel>{this.props.etiqueta}</ControlLabel>
                <FormControl
                    disabled={!this.props.editable}
                    type="{tipo}"
                    placeholder={this.props.etiqueta+"..."}
                    value={this.props.valor}
                    onChange={(e) => this.props.actualizar(this.props.nombre,e.target.value)}
                />
            </FormGroup>
        );
    }
}

export default FormInput;    