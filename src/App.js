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
        this.state = {
                idMenuSeleccionado:0,
                platos:[],
                platoEditar:{nombre:'',precio:0.0}
            };
        this.elegirMenu = this.elegirMenu.bind(this);
        this.addPlato = this.addPlato.bind(this);
        this.seleccionarPlato = this.seleccionarPlato.bind(this);
        this.actualizarPlato = this.actualizarPlato.bind(this);
        this.nuevoPlato = this.nuevoPlato.bind(this);
        this.borrarPlato = this.borrarPlato.bind(this);        
    }

    addPlato(){
        const platosAux= [...this.state.platos,this.state.platoEditar];                    
        this.setState({platos:platosAux,platoEditar:{nombre:'',precio:0.0}});
    }

    seleccionarPlato(indice){
        let platoEditable =    this.state.platos[indice];
        this.setState({platoEditar:platoEditable});
    }

    nuevoPlato(){
        this.setState({platoEditar:{nombre:'',precio:0.0}});
    }

    actualizarPlato(att,valor){
        let aux = this.state.platoEditar;
        aux[att]= valor;
        this.setState({platoEditar:aux});
    }

    borrarPlato(indice){
        var nuevoArreglo = this.state.platos.slice(); //copiar el arreglo para hacerlo inmutable
        nuevoArreglo.splice(indice, 1); //borrar el elemento
        this.setState({platos: nuevoArreglo}); //actualizar el estado
    }
    
    elegirMenu (menuItem){
        this.setState({idMenuSeleccionado:menuItem})
    }

    render() {
        let contenido = <p>Bienvenido</p>;
        switch(this.state.idMenuSeleccionado){
            case 1:
                contenido= <div><PlatosForm 
                                    onAddPlato={this.addPlato} 
                                    nuevo={this.nuevoPlato}                                    
                                    platoEditar={this.state.platoEditar} 
                                    actualizarPlato={this.actualizarPlato}
                                    >
                                </PlatosForm>
                                    <PlatoLista platos={this.state.platos} 
                                                onselect={this.seleccionarPlato}
                                                borrar={this.borrarPlato}>
                                    </PlatoLista>
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
