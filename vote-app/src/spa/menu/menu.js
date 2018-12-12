import React from 'react';

import {Link} from 'react-router-dom';

class Menu extends React.Component {
    //state = {  }
    render() { 
        return ( <ul className="header">
                    <li>
                        <Link to="/"> HOME </Link>
                    </li>
                    <li>
                        <Link to="about"> About</Link>
                    </li>
                    <li>
                        <Link to="contact"> Contact</Link>
                    </li>

        </ul>);
    }
}
 
export default Menu;

//link instead of a in html
// to insteat of href in html