import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import  logo from "./images/flogo.png"

class App extends Component {

  render() {
    //for un-inspect
    window.addEventListener("contextmenu", (e) => e.preventDefault());

    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color"
        style={{textDecoration: 'none',}}
        
         title={<Link style={{textDecoration: 'none',  color: 'white'}} to="/"><img src={logo} alt="logo" style={{width: "70px", height: "40px"}} /></Link>} scroll>
            <Navigation>
             <Link to="/aboutme" style={{textDecoration: 'none', color: 'white'}}>About Me</Link>
                <Link to="/resume" style={{textDecoration: 'none', color: 'white'}}>Resume</Link>
                <Link to="/projects" style={{textDecoration: 'none', color: 'white'}}>Projects</Link>
                <Link to="/contact" style={{textDecoration: 'none', color: 'white'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"><img src={logo} alt="logo" style={{width: "70px", height: "40px"}} /></Link>}>
            <Navigation>
             <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;