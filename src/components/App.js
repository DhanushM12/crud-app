import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateMentor from "./CreateMentor";
import UpdateMentor from "./UpdateMentor";
import MentorList from "./MentorList";



function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-mentor"} className="nav-link">
                Mentor CRUD App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-mentor"} className="nav-link">
                  Create Mentor
                </Link>
              </Nav>

              <Nav>
                <Link to={"/edit-mentor/:id"} className="nav-link">
                  Update Mentor
                </Link>
              </Nav>

              <Nav>
                <Link to={"/mentor-list"} className="nav-link">
                  Mentor List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateMentor} />
                <Route path="/create-mentor" component={CreateMentor} />
                <Route path="/edit-mentor/:id" component={UpdateMentor} />
                <Route path="/mentor-list" component={MentorList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
