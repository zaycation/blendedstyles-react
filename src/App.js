import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">Blended Styles</NavbarBrand>    
                    <NavbarText href="#">510-200-9030</NavbarText>       
                </div>
                </Navbar>
            </div>
        );
    }
}

export default App;