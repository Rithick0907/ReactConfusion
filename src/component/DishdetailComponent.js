import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody,CardTitle } from 'reactstrap';

class DishdetailComponent extends Component{
    constructor(props){
        super(props);
    }
    getDateString(date){
        let d=new Date(date);
        let str=" , "+d.toLocaleDateString('default',{month:'short'})+"  "+(d.getDate().toString().padStart(2, "0"))+" , "+d.getFullYear();
        return str;
      }
    render(){
        let result=null;
        if (this.props.dish != null){
            let allCommment=this.props.dish.comments.map((com)=>{
              return (
                <div>
                  <li className="list-unstyled m-2">{com.comment}</li>
                  <li className="list-unstyled">--{com.author}{this.getDateString(com.date)}</li>
              </div>
          
            );
            });
            result=(
                <Card className="border-0">
                    <CardTitle>Comments</CardTitle>
                    <CardBody>{allCommment}</CardBody>
                </Card>
            );
        }
        return(<div>{result}</div>)
    
    }
}

export default DishdetailComponent;