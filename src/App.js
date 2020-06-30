import React from 'react';
import SoundImageGrid from './components/container/SoundImageGrid';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <>
            <Navbar className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/">UNDER CONSTRUCTION</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <div className="App">
                <SoundImageGrid/>
            </div>
        </>
    );
}

export default App;
