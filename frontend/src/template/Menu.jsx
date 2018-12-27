import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-inverse bg-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">
                                <i className="fa fa-calendar-check-o"></i>
                                TodoApp
                            </a>
                        </div>
                        <div id="navbar" className="navbar-collpase collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="#/todos">
                                        Tarefas
                                    </a>
                                </li>
                                <li>
                                    <a href="#/about">
                                        Sobre
                                    </a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
