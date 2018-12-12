import React from 'react';
import {connect} from 'react-redux'

class UserDetailContainer extends React.Component {
    state = {  }
    render() { 
        if (this.props.activeUser===null){
            return(<div> Click name to see details</div>)
        }
        else{
        return ( 
            <div>
                User detail from container:<br></br>
                {this.props.activeUser.firstName} {this.props.activeUser.lastName}
                <br></br>
                {this.props.activeUser.description}
            </div>
         );
    }}
}
 
function convertStoreToProps(store){
    return{
        activeUser:store.clickedUser
    }
}
export default connect(convertStoreToProps)(UserDetailContainer)