import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

class NoteFoundPage extends Component {
    render() {
        return (
            <ComponentNotFound className="container">
                <div className="row">
                    <div className ="col-md-12">
                        <div className="error-template">
                            <h1>Ops!</h1>
                            <h2>Error 404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error occured. The requested page not found!
                            </div>
                            <div className="error-actions">
                                <Link to="/" className="btn btn-outline-primary btn-lg">
                                    <i className="fas fa-home" />
                                    &nbsp;Back To Main
                                </Link>
                                <Link to="/" className="btn btn-outline-secondary btn-lg">
                                    <i className="fas fa-envelope" />
                                    &nbsp;Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            
            </ComponentNotFound>
        );
    }
}

export default NoteFoundPage;

const ComponentNotFound = styled.div `
 .error-template {
     padding: 40px 15px;
     text-align: center;
 }

 .error-actions {
     margin-top :15px;
     margin-bottom: 15px;
     }

     .btn {
         margin-right: 10px
     }
`;
