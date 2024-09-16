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

        <>

       

          <Grid>
            <Cell col={3}>
              <Card shadow={5} style={{ minWidth: "450",  maxWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://glmpay-website.netlify.app/static/media/Mockuuups4Vi7VpfA9ApjfJrjc9Q6G11.599183c44757e2258f6b.png) center / cover"
                  }}
                >
                  {/* {" "}Fiverr Website App */}
                </CardTitle>
                <CardText>
                  I have build GLMpay website as a Freelancing work{" "}
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/GLMpay_website.git"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://glmpay-website.netlify.app/"
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
            <Cell col={3}>
              <Card shadow={5} style={{minWidth: "450",  maxWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSXSmvUd7nDABO5vAxQ1djgNrTdRUFsl7EfvIgfhmvI0m-Qu2BuLOKqxXU7DzKkpLxVw&usqp=CAU) center / cover"
                  }}
                >
                  {/* {" "}Fiverr Website App */}
                </CardTitle>
                <CardText>
                  I have accepted new challenges and created weekday candidate
                  job application{" "}
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/candidate-job-application.git"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://candidate-job-application.netlify.app/"
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
            <Cell col={3}>
              <Card shadow={5} style={{ minWidth: "450", maxWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(data:image/png;base64,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) center / cover"
                  }}
                >
                  {/* {" "}Fiverr Website App */}
                </CardTitle>
                <CardText>
                  I have accepted new challenges and created landing page of
                  Mailchimp website landing page{" "}
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/Mailchimp-task-assignment.git"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://mailchimp-website.netlify.app/"
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
            <Cell col={3}>
              <Card shadow={5} style={{ minWidth: "450",  maxWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png) center / cover"
                  }}
                >
                  {/* {" "}Fiverr Website App */}
                </CardTitle>
                <CardText>
                  I have build Fiverr App Website using ReactJS and SCSS there
                  is having Animation,Graphics and Design, Bussiness, lifestyle
                  etc.{" "}
                </CardText>
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
            <Cell col={3}>
              <Card
                shadow={5}
                style={{ minWidth: "450",  maxWidth: "450", margin: "20px" }}
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
            <Cell col={3}>
              <Card
                shadow={5}
                style={{ minWidth: "450",  maxWidth: "450", margin: "20px" }}
              >
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://fileserver.teachstarter.com/thumbnails/25184-52-shopping-list-vocabulary-words-gb-thumbnail-0-600x400.png) center / cover"
                  }}
                >
                  {" "}
                  Shopping List
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
            <Cell col={3}>
              <Card
                shadow={5}
                style={{ minWidth: "450",  maxWidth: "450", margin: "20px" }}
              >
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://st2.depositphotos.com/1032577/6582/i/450/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg) center / cover"
                  }}
                >
                  {" "}
                  My Portfolio
                </CardTitle>
                <CardText>
                  I have displayed about my self in that resume and using
                  react-mdl framework
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/ResumeWebsite.git"
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
            <Cell col={3}>
              {/* Project 4 */}
              <Card shadow={5} style={{ minWidth: "450",  maxWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(https://cdn.pixabay.com/photo/2018/12/04/18/04/media-3856203__340.png) center / cover"
                  }}
                >
                  {" "}
                  Movie Search App
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

            <Cell col={3}>
              <Card shadow={5} style={{ minWidth: "450",  maxWidth: "450", margin: "20px" }}>
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
                <CardText>
                  I have build Desklib App Website using ReactJS and css. .{" "}
                </CardText>
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

            <Cell col={3}>
              <Card shadow={5} style={{ minWidth: "450",  maxWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background:
                      "url(data:image/jpeg;base64,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) center / cover"
                  }}
                >
                  {/* {" "}Fiverr Website App */}
                </CardTitle>
                <CardText>
                  build weather dashboard using react js and weather api
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Farjana1khan/weather-dashboard.git"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://waether-site.netlify.app/"
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
        </>
      );
    } else if (this.state.activeTab === 1) {
      //Next JS Project
      return (
        <div>
          <Grid>
            <Cell col={3}>
              <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(data:image/jpeg;base64,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) center / cover"
                  }}
                />
                <CardText>
                  Assignment help is the assistance that students seek from
                  professionals to complete their academic tasks. Experts guide
                  these scholars in every subject and topic. They also aid in
                  steps like topic blogs, services, grammar checker and
                  plagiarism.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ align: "center", textDecoration: "none" }}
                    href="#/"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://www.ozassignments.com/"
                    target="_blank"
                  >
                    View
                  </Button>
                </CardActions>
                <CardMenu>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={3}>
              <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://www.anayalearning.com/assets/hero2.png) center / cover" 
                  }}
                />
                <CardText>
                  Get professional assignment help in Australia at Anaya
                  Learning. Trusted service offering top-notch assistance for
                  your academic needs.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ align: "center", textDecoration: "none" }}
                    href="#/"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://www.anayalearning.com/"
                    target="_blank"
                  >
                    View
                  </Button>
                </CardActions>
                <CardMenu>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={3}>
              <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(data:image/jpeg;base64,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) center / cover"
                  }}
                />
                <CardText>
                  Desklib is an online learning library where students can find
                  solutions to assignments, essays, dissertations, case studies,
                  research reports, reflection writing and a lot more. Students
                  looking for assignment help, help in writing an essay, help
                  with dissertations, help in writing a perfect case study can
                  get instant access to our resources and can be benefited from
                  them. The resources are provided by various students and
                  education partners which can be used by students looking for
                  help in their homework to learn and improve their knowledge
                  and writing skills. Students can gain access to millions of
                  documents in various subjects and explore them to learn more
                  about the topic and prepare their assignments
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    style={{ align: "center", textDecoration: "none" }}
                    href="#/"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://desklib.com/?loginpopup=true&next=/home/"
                    target="_blank"
                  >
                    View
                  </Button>
                </CardActions>
                <CardMenu>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        // Node Js Project
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", maxWidth:"450", margin: "20px" }}>
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
                {" "}
                REST FULL API
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
    } else if (this.state.activeTab === 3) {
      return (
        // JavaScript Project
        <div>
          <div style={{  display:"flex", margin:"20px 20px" }}>
            <Card shadow={5} >
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

            <Card shadow={5}  style={{  marginLeft:"20px" }}>
              <CardTitle
                style={{
                  color: "#000",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover"
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
    } else if (this.state.activeTab === 4) {
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
    } else if (this.state.activeTab === 5) {
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
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Tabs
        style={{marginTop:"40px"}}
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>ReactJs</Tab>
          <Tab>NextJs</Tab>
          <Tab>Node Js</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Html/Css</Tab>
          <Tab>MERN</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;




