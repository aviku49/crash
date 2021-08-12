import React, { useState } from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import User from './User'
import Create from './Create'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Home from './Home';

function App() {
  // const [name,setName]=useState("Neha");
  return (
    <div className="App">
      <Router>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/' >home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/about' >About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/contact' >contact</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/list' >user list</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/create' >create user</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/user">
            <User />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <Create />
          </Route>

          <Route path="/list">
            <User />
          </Route>

          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
