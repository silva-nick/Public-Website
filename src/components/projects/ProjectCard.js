import React from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Jumbotron,
  Table,
  td,
  thead,
  tr,
  Button,
  Card
} from "react-bootstrap";

import Navigation from "../tools/Navigation";

import { Link } from "react-router-dom";

const projects = [];

class ProjectCard extends React.Component {
  state = {};

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ height: "600px", width: "100%", maxWidth: "30rem" }}>
          <Card.Img variant="top" src= {this.props.img} />
          <Card.Body className="project-card" style={{ justifyContent: "center" }}>
            <Card.Title style={{ padding: 0 }}>
              <h4>{this.props.title}</h4>
            </Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Link to={this.props.link}>
              <Button className="theme-button">See more</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
