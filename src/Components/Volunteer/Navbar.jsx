import React from 'react';
import user from "../Assests/USER-LOGO.jpg";

export const Navbar = ({ toggleSidebar }) => {
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
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            role="button"
                            aria-expanded="false"
                        >
                            <img
                                src={user}
                                className="user-image rounded-circle shadow"
                                alt="User"
                                style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '8px' }}
                            />
                            <span className="d-none d-md-inline">Alexander Pierce</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
