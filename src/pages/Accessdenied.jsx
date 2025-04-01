import React from 'react'
import { Link } from 'react-router-dom'

function Accessdenied() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h1 className="display-1 fw-bold text-danger">500</h1>
            <h2 className="mb-4">Oops! Access Denied!</h2>
            <p className="text-muted mx-3">
                The page you are looking for have not permisson!
            </p>
            <Link to="/login" className="btn btn-outline-primary mt-3">
                Go To Login
            </Link>
        </div>
    )
}

export default Accessdenied