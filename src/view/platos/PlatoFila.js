import React from 'react';
import {Label} from 'react-bootstrap';

class PlatoFila extends React.Component {

     constructor(props) {
        super(props);
    }

     render() {
    return (
      
        <li className="list-group-item">
                <Label bsStyle="default">{this.props.plato.nombre}</Label>
                <span>{this.props.plato.precio}</span>
        </li>
    );
  }
}

export default PlatoFila;
