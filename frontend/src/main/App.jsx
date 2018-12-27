import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React, { Component } from 'react';
import Todo from '../todo/Todo';
import About from '../about/About';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Todo />
                <About />
            </div>
        );
    }
}

export default App;