import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ErrorPage extends Component {


    render() {
        return <>
            <div className='d-flex justify-content-center align-items-center min-100vh flex-column'>
                <h4>Oops!! Page not found</h4>
                <p>Sorry, an unexpected error has occurred.</p>
                <Link to="/" className='btn btn-link'>Return to Home</Link>
            </div>
        </>
    }
}

export default ErrorPage