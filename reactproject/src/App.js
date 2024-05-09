import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import  logo from "./images/flogo.png"

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
  }

  toggleDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  }

  closeDrawer = () => {
    this.setState({ isDrawerOpen: false });
  }

  render() {

    const { isDrawerOpen } = this.state;

    //for un-inspect
   // window.addEventListener("contextmenu", (e) => e.preventDefault());

    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color"
        style={{textDecoration: 'none',}}
        
         title={<Link style={{textDecoration: 'none',  color: 'white'}} to="/"><img src={logo} alt="logo" style={{width: "70px", height: "40px"}} /></Link>} scroll>
            <Navigation>
             <Link to="/aboutme" style={{textDecoration: 'none', color: 'white'}} Click={this.toggleDrawer}>About Me</Link>
                <Link to="/resume" style={{textDecoration: 'none', color: 'white'}} Click={this.toggleDrawer}>Resume</Link>
                <Link to="/projects" style={{textDecoration: 'none', color: 'white'}} Click={this.toggleDrawer}>Projects</Link>
                <Link to="/contact" style={{textDecoration: 'none', color: 'white'}} Click={this.toggleDrawer}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"><img src={logo} alt="logo" style={{width: "70px", height: "40px"}} /></Link>}open={isDrawerOpen} onClick={this.toggleDrawer}>
            <Navigation>
             <Link to="/aboutme" onClick={this.closeDrawer}>About Me</Link>
              <Link to="/resume" onClick={this.closeDrawer}>Resume</Link>
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