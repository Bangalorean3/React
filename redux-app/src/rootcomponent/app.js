import React from 'react';
import MainComponent from '../components/maincomponent';

class App extends React.Component {
    //state = {  }
    render() { 
        return ( 
            <div>
                Hello REDUX
                <MainComponent></MainComponent>
            </div>
         );
    }
}
 
export default App;