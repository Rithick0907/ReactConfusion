import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody,CardTitle,CardImg,CardText } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish) {
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
    getDateString(date){
        let d=new Date(date);
        let str=" , "+d.toLocaleDateString('default',{month:'short'})+"  "+(d.getDate().toString().padStart(2, "0"))+" , "+d.getFullYear();
        return str;
      }
      renderComments(dish){
        let result=null;
        if (dish != null){
            let allCommment=this.props.dish.comments.map((com)=>{
              return (
                <div>
                  <li className="list-unstyled m-1">{com.comment}</li>
                  <li className="list-unstyled">--{com.author}{this.getDateString(com.date)}</li>
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
    render(){
        
        return(
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
            </div>
            <div  className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.dish)}
            </div>
        </div>)
    
    }
}

export default DishDetail;