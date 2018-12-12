import React from 'react';

class List extends React.Component {
   // state = {  }

   constructor(props){
    super(props)
    this.state={
        vote:0
    }
    //this.changeState = this.changeState.bind(this)
    this.upvote=this.upvote.bind(this)
    this.downvote=this.downvote.bind(this)
    }

    upvote(){
        console.log("upvoted" )
        this.setState({
            vote: this.state.vote+1
        })
        console.log(this.state.vote)
    }

    downvote(){
        console.log("downvoted")
        this.setState({
            vote: this.state.vote-1
        })
        console.log(this.state.vote)
    }


    render() { 
        return ( 
            <div class="card" >
             <div class="card-body">
                Product detail: {this.props.limage}<br></br>
                ID:{this.props.lkey}<br></br> 
                <h3 class="card-title">name : {this.props.lname}</h3>
                <p class="card-text">price : {this.props.loprice}</p>
                 <h4 class="card-subtitle mb-2 text-muted">specification : {this.props.lspecifications}</h4>
                 <a class="card-link">Votes:{this.state.vote}</a>
                <button type="button" class="btn btn-primary" onClick={this.upvote}>UPVOTE</button> {this.state.vote}<br></br>
                <button type="button" class="btn btn-primary" onClick={this.downvote}>DOWNVOTE</button> {this.state.vote}<br></br><br></br>
                <br></br>
                </div>
            </div>
         );
    }
}
 
export default List;