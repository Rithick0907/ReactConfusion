import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

const RenderDish=({dish})=> {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

const RenderComments=({dish})=>{
    let result=null;
    if (dish != null){
        let allCommment=dish.comments.map((com)=>{
          return (
            <div>
              <li className="list-unstyled m-1">{com.comment}</li>
              <li className="list-unstyled">--{com.author}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li>
          </div>
      
        );
        });
        result=(
            <Card className="border-0">
                <CardBody>
                <h4>Comments</h4>
                {allCommment}
                </CardBody>
            </Card>
        );
    }
    return result;

  }
const DishDetail=(props)=>{
    return(
    <div className="row">
        <div  className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish}/>
        </div>
        <div  className="col-12 col-md-5 m-1">
            <RenderComments dish={props.dish}/>
        </div>
    </div>
    )
}

export default DishDetail;