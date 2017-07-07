import React from 'react';
import {Label,Button} from 'react-bootstrap';

class PlatoFila extends React.Component {

     constructor(props) {
        super(props);
        this.handleClickFila = this.handleClickFila.bind(this);
        this.handleBorrar = this.handleBorrar.bind(this);
    }

    handleClickFila(evt){
        evt.preventDefault();
        this.props.onselect(this.props.id);
    }

    handleBorrar(evt){
        evt.stopPropagation();        
        this.props.ondelete(this.props.id);
    }


    render() {
        return (      
            <li className="list-group-item" onClick={this.handleClickFila}>
                    <Label bsStyle="default">{this.props.plato.nombre}</Label>
                    <span>{this.props.plato.precio}</span>
                    <Button bsStyle="danger" onClick={this.handleBorrar}>Borrar</Button>
            </li>
    );
  }
}

export default PlatoFila;
