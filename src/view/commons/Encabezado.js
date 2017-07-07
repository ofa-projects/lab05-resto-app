import React from 'react';
import { Nav,Navbar, NavItem} from 'react-bootstrap';

class  Encabezado extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editar:false,titulo: "EPEPEPEPEPEPE"};
        this.toggleEditar = this.toggleEditar.bind(this);
    }

    toggleEditar(){
        let aux = !this.state.editar;
        this.setState({editar: aux});
    }

    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Reto APP</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.props.onElegirMenu}>
                        {this.props.children}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
    }
}

export default Encabezado;
