import React from 'react'
import {Link} from 'react-router-dom'
export default function header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="pngwing.com.png" alt="" id="brand" className="src " /> On-site Motor services  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Home Motor services
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
