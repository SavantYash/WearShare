import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import user from "../Assests/USER-LOGO.jpg";

export const UserNavbar = ({ toggleSidebar }) => {
    const navigate = useNavigate()
    return (
        <nav className="app-header navbar navbar-expand bg-body">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-lte-toggle="sidebar"
                            href="#"
                            role="button"
                            onClick={toggleSidebar}
                        >
                            <i className='fa-solid fa-bars' />
                        </a>
                    </li>
                    <li className="nav-item dropdown user-menu" style={{ textAlign: 'center' }}>
                        
                            <img
                                src={user}
                                className="user-image rounded-circle shadow"
                                alt="User"
                                style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '8px' }}
                                onClick={()=>{navigate("/profile")}}
                            />
                            <span className="d-none d-md-inline">Alexander Pierce</span>
                        
                    </li>
                </ul>
            </div>
        </nav>

    )
}
