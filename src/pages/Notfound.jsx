import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-4">Oops! Page Not Found</h2>
            <p className="text-muted">
                The page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-primary mt-3">
                Go To Home
            </Link>
        </div>
    )
}

export default Notfound