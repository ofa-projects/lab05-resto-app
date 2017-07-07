import React from 'react';
import PlatoFila from './PlatoFila';
import {ListGroup} from 'react-bootstrap';

class PlatoLista extends React.Component {

     constructor(props) {
        super(props);
    }

     render() {
           const filas = this.props.platos.map((unPlato,indice) =>
                <PlatoFila plato={unPlato} key={indice}  id={indice} onselect={this.props.onselect}></PlatoFila>
            );
    return (
      
      <ListGroup componentClass="ul">{filas}</ListGroup>
    );
  }
}

export default PlatoLista;
