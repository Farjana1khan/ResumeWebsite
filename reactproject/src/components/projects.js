import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        // React Js Projects

        <div className="">
          <Grid>
          <Cell col={4}>
             
              <Card shadow={5} style={{ minWidth:"450" ,margin:"20px"}}>
                <CardTitle
                  style={{
                     color: "#000",
                    height: "176px",
                    background:
                      "url(https://www.linkpicture.com/q/esklibImag-4.jpg) center / cover"
                  }}
                >
                  {/* {" "}Fiverr Website App */}
                </CardTitle>
                <CardText>I have build Fiverr App Website using ReactJS and SCSS there is having Animation,Graphics and Design,
                Bussiness, lifestyle etc. </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/fiverrApp.git"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://fiverrapp.netlify.app/"
                    target="_blank"
                  >
                    View
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#000" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={5}
                style={{minWidth:"450" ,margin:"20px",   minHeight: "176px" }}
              >
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU4bVUSEX6ijCbbfdAXgjydRlNIdA6rG8V7w&usqp=CAU) center / cover"
                  }}
                >
                  CRUD Operation
                </CardTitle>
                <CardText>
                  In simple CRUD project i used ReactJS,Bootstrap and Css for
                  frontend design, make styling and good looking.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/Simple-CRUD-Form.git"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="/"
                    target="_blank"
                  >
                    View
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#000" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={5}
                style={{minWidth:"450" ,margin:"20px",   minHeight: "176px" }}
              >
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://fileserver.teachstarter.com/thumbnails/25184-52-shopping-list-vocabulary-words-gb-thumbnail-0-600x400.png) center / cover"
                  }}
                >
                  {" "}Shopping List
                </CardTitle>
                <CardText>
                  I have created login, Shopping List and fetched data using
                  axios Api to show image,author and price.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/ShoppingList-Project"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://shoppinglistproject-farjana1khan.vercel.app/"
                    target="_blank"
                  >
                    View
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#000" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={5}
                style={{ minWidth:"450" ,margin:"20px", minHeight: "176px" }}
              >
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://st2.depositphotos.com/1032577/6582/i/450/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg) center / cover"
                  }}
                >
                  {" "}My Portfolio
                </CardTitle>
                <CardText>
                  I have displayed about my self in that resume and using
                  react-mdl framework
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/ResumeWebsite"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://farjana-portfolio-website.netlify.app/"
                    target="_blank"
                  >
                    View
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#000" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              {/* Project 4 */}
              <Card shadow={5} style={{ minWidth:"450" ,margin:"20px" }}>
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://cdn.pixabay.com/photo/2018/12/04/18/04/media-3856203__340.png) center / cover"
                  }}
                >
                  {" "}Movie Search App
                </CardTitle>
                <CardText>I have created movie search App</CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/movie-list-app.git"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://build-by-farjana-movieapp.netlify.app/"
                    target="_blank"
                  >
                    View
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#000" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
           
            <Cell col={4}>
             
             <Card shadow={5} style={{ minWidth:"450" ,margin:"20px"}}>
               <CardTitle
                 style={{
                    color: "#000",
                   height: "176px",
                   background:
                     "url(https://desklib.com/smartStudy.svg) center / cover"
                 }}
               >
                 {/* {" "}Fiverr Website App */}
               </CardTitle>
               <CardText>I have build Desklib App Website using ReactJS and css.
              . </CardText>
               <CardActions border>
                 <Button
                   colored
                   style={{ textDecoration: "none" }}
                   href="https://github.com/Farjana1khan/Desklib.git"
                   target="_blank"
                 >
                   GitHub
                 </Button>

                 <Button
                   colored
                   style={{ color: "red", textDecoration: "none" }}
                   href="https://desklib-by-farjana.netlify.app/"
                   target="_blank"
                 >
                   View
                 </Button>
               </CardActions>
               <CardMenu style={{ color: "#000" }}>
                 <IconButton name="share" />
               </CardMenu>
             </Card>
           </Cell>

          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        // Node Js Project
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_aEa8X0Xs52fs9m1DSBedCJq4gsuAb1KIkg&usqp=CAU) center / cover"
                }}
              >
                CRUD operation
              </CardTitle>
              <CardText>
                I have build crud operation using node js and Express js
              </CardText>
              <CardActions border>
                <Button
                  colored
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Farjana1khan/Simple-CRUD-Form.git"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  colored
                  style={{ color: "red", textDecoration: "none" }}
                  href="/"
                  target="_blank"
                >
                  View
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#000" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_aEa8X0Xs52fs9m1DSBedCJq4gsuAb1KIkg&usqp=CAU) center / cover"
                }}
              >
                {" "}REST FULL API
              </CardTitle>
              <CardText>
                I have created RESTFULL API using node js and mongoDB
              </CardText>
              <CardActions border>
                <Button
                  colored
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Farjana1khan/RESTFULLAPI-NODEJS_MONGODB"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  colored
                  style={{ color: "red", textDecoration: "none" }}
                  href="#"
                  target="_blank"
                >
                  View
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#000" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        // JavaScript Project
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboAdVwCSJPscd3UEr4W6Y0e7NjAN0W_Tdww&usqp=CAU) center / cover"
                }}
              />
              <CardText>
                This project is Music App player used different song,
                author,title and audio. In that project i used Javascript,
                Bootstrap,Css for design,styling and javascript used for
                validation.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Farjana1khan/Music-App-Player.git"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  colored
                  style={{ color: "red", textDecoration: "none" }}
                  href="https://musics-app-player.vercel.app/"
                  target="_blank"
                >
                  View
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#000" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "176px",
                  background:
                    "url(https://cdn.wallpaperhub.app/cloudcache/4/4/7/5/e/7/4475e73c885921925f61fcf123c7c8c1f93e1c0c.jpg) center / cover"
                }}
              />
              <CardText>This project is Window11Desktop .</CardText>
              <CardActions border>
                <Button
                  colored
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Farjana1khan/Win11Desktop.git"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  colored
                  style={{ color: "red", textDecoration: "none" }}
                  href="https://win11-desktop.vercel.app/"
                  target="_blank"
                >
                  View
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#000" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        // Html/Css Project
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxFLFZsQTRwE8dg2rseSyTnmv5Os6DwnVtPg&usqp=CAU) center / cover"
                }}
              />
              <CardText>
                It is Company theme project use for searching different company
                and html, bootstrap is use for responsive web page, javascript
                is use for validation and css is use for designing and styling
                the webpage
              </CardText>
              <CardActions border>
                <Button
                  colored
                  style={{ align: "center", textDecoration: "none" }}
                  href=" https://github.com/Farjana1khan/CompanyThemeWebsite.git"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  colored
                  style={{ color: "red", textDecoration: "none" }}
                  href="/"
                  target="_blank"
                >
                  View
                </Button>
              </CardActions>
              <CardMenu>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        // MERN Project
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1ZyUg4a4JHP8w4sTL5BY2Tq-Dm8lcgNX8Q&usqp=CAU) center / cover"
                }}
              />
              <CardText>
                It is a e-commerce project. In that project created Admin,
                users, product list, order, shipping, payment and checkout.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  style={{ align: "center", textDecoration: "none" }}
                  href=" https://github.com/Farjana1khan/Ecommerce_MERN_Project"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  colored
                  style={{ color: "red", textDecoration: "none" }}
                  href="https://e-commerce-mern-app.netlify.app/"
                  target="_blank"
                >
                  View
                </Button>
              </CardActions>
              <CardMenu>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>ReactJs</Tab>
          <Tab>Node Js</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Html/Css</Tab>
          <Tab>MERN</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
