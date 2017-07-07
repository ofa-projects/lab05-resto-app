import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Encabezado from './view/commons/Encabezado'
import PlatosForm from './view/platos/PlatosForm'
import PlatoLista from './view/platos/PlatoLista'
import { NavItem,Grid,Row,Col} from 'react-bootstrap';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {idMenuSeleccionado:0,platos:[]};
        this.elegirMenu = this.elegirMenu.bind(this);
        this.addPlato = this.addPlato.bind(this);
        this.seleccionarPlato = this.seleccionarPlato.bind(this);

    }

    addPlato(nombre,precio){
        console.log(this.state);
        const platosAux= [...this.state.platos,
            {nombre: nombre, precio:precio}];
        this.setState({platos:platosAux});
    }

    seleccionarPlato(indice){
        console.log(indice);
        let platoEditable =    this.state.platos[indice];
        console.log(platoEditable);
        this.setState({platoEditar:platoEditable});
    }

    elegirMenu (menuItem){
        this.setState({idMenuSeleccionado:menuItem})
    }

    render() {
        let contenido = <p>Bienvenido</p>;
        switch(this.state.idMenuSeleccionado){
            case 1:
                contenido= <div><PlatosForm onAddPlato={this.addPlato} platoEditar={this.state.platoEditar}></PlatosForm>
                                <PlatoLista platos={this.state.platos} onselect={this.seleccionarPlato}></PlatoLista>
                                </div>
                break;
            case 2:
                contenido = <p>pedidos!!!</p>
                break;
        }
        return (
        <div>
            <Encabezado titulo="RESTO APP" onElegirMenu={this.elegirMenu}>
                <NavItem eventKey={1} href="#">Platos</NavItem>
                <NavItem eventKey={2} href="#">Pedidos</NavItem>
            </Encabezado>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        {contenido}
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default App;
