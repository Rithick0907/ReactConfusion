import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleSubmit(values) {
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    // event.preventDefault();
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  render() {
    return (
      <>
        <Button
          outline
          color="secondary"
          className="mt-3"
          onClick={this.toggle}
        >
          <i class="fa fa-pencil" aria-hidden="true"></i> {"  "}Submit Comments
        </Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Submit Comments</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="ratingSelect">Rating</Label>
                  <Control.select
                    model=".ratingSelect"
                    id="ratingSelect"
                    name="ratingSelect"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="name">Name</Label>

                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Col>
                  <Label htmlFor="comments">Comments</Label>
                  <Control.textarea
                    model=".comments"
                    id="comments"
                    name="comments"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit Comment
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
const RenderDish = ({ dish }) => {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
};

const RenderComments = ({ comments, addComment, dishId }) => {
  let result = null;
  if (comments != null) {
    let allCommment = comments.map((com) => {
      return (
        <div>
          <li className="list-unstyled m-1">{com.comment}</li>
          <li className="list-unstyled">
            --{com.author}{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(com.date)))}
          </li>
        </div>
      );
    });
    result = (
      <Card className="border-0">
        <CardBody>
          <h4>Comments</h4>
          {allCommment}
          <CommentForm dishId={dishId} addComment={addComment} />
        </CardBody>
      </Card>
    );
  }
  return result;
};

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish !== null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
};

export default DishDetail;
