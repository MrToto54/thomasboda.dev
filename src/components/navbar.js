import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{padding: "20px", paddingLeft: "50px"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home" style={{fontWeight: "bold", paddingRight: "25px", paddingLeft: "25px"}}>Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" style={{fontWeight: "bold", paddingRight: "25px", paddingLeft: "25px"}}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work" style={{fontWeight: "bold", paddingRight: "25px", paddingLeft: "25px"}}>Work</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;