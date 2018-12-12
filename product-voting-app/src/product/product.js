import React from 'react';
//import  ReactDOM from "react-dom";
import axios from 'axios';
import List from './list';


class Product extends React.Component {
    //state = {  }
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
        this.renderProductDetail = this.renderProductDetail.bind(this)
    }

    render() { 
        return ( 
            <div>
                <p>data here </p>
                {this.renderProductDetail()}
            </div>
         );
    }

    getRemoteData(){
        axios.get("http://localhost:3000/plp")
        .then((res) => {
            //console.log(data)
            this.setState({products:res.data})
           // console.log(this.state.products)
        })
    }

    componentWillMount(){
        this.getRemoteData()
    }

    renderProductDetail(){
         
        return this.state.products.map((local) => {
            return(
            <List   limage={local.imageURL}    
                    lkey={local.id}
                    lname={local.name}
                    loprice={local.price}
                    lspecifications={local.specification}
            >
            </List>)
        })
    }


}
 
export default Product;