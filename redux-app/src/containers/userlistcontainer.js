import React from 'react';
import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'

import clickUserAction from '../actions/userclickactions'

class UserListContainer extends React.Component {
    //state = {  }
    renderThePropsIReceived(){
            // <div>
            //     {/* rendering the props  */}
            // </div>
            console.log("I have received users as props whose name is myusers");
            console.log(this.props.myusers);
            return this.props.myusers.map((u)=> {
                return (
                    <li key={u.id} onClick={()=> this.props.clickUserProp(u)}>
                    {u.firstName} {u.lastName}
                     </li>
                )
            }
        )
    }

    render() { 
        return ( <div>
            User list from container : {this.renderThePropsIReceived()}
        </div> );
    }
}
 
function convertStoreToProps_custom(store){
    return{
        myusers:store.users        
    }
}

function mapPropsToActionsAndDispatchThem(dispatch){
    return bindActionCreators({
        clickUserProp: clickUserAction
    },dispatch)
}
export default connect(convertStoreToProps_custom,mapPropsToActionsAndDispatchThem)(UserListContainer);