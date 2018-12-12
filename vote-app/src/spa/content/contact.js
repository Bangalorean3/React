import React from 'react';
import {CSSTransition} from 'react-transition-group';


class Contact extends React.Component {
    //state = {  }
    render() { 
        return ( 
            <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
                enter={false}
            >
            <div>
                I am at contact
            </div>
            </CSSTransition>
         );
    }
}
 
export default Contact;