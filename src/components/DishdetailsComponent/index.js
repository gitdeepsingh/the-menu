import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

class DishDetails extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            <CardText>{dish.comments.map(item =>
              <Card key={item.id}>
                <CardBody>
                  <CardTitle>{item.rating}</CardTitle>
                  <CardText>{item.comment}</CardText>
                </CardBody>
              </Card>
            )}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.menu}
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetails;
