import React from 'react';
import {Label} from 'react-bootstrap';

class PlatoFila extends React.Component {

     constructor(props) {
        super(props);
        this.handleClickFila = this.handleClickFila.bind(this);
    }

    handleClickFila(evt){
        this.props.onselect(this.props.id);
    }
    render() {
        return (      
            <li className="list-group-item" onClick={this.handleClickFila}>
                    <Label bsStyle="default">{this.props.plato.nombre}</Label>
                    <span>{this.props.plato.precio}</span>
            </li>
    );
  }
}

export default PlatoFila;
