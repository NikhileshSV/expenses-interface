import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedin");
        navigate("/login");
    };

    return (
        <nav className={["navbar navbar-expand-lg navbar-light bg-light", styles.navbar].join(" ")}>
            <a className={["navbar-brand", styles.navbarBrand].join(" ")} href="/">
                ExpenseTracker
            </a>
            <button
                className={["navbar-toggler", styles.navbarToggler].join(" ")}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={["collapse navbar-collapse justify-content-end", styles.navbarItems].join(" ")} id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className={["nav-item", styles.navItem].join(" ")}>
                        <NavLink to="/transactions" className={({ isActive }) => ["nav-link", isActive ? styles.activeLink : undefined].join(" ")}>
                            Transactions
                        </NavLink>
                    </li>
                    <li className={["nav-item", styles.navItem].join(" ")}>
                        <NavLink to="/reports" className={({ isActive }) => ["nav-link", isActive ? styles.activeLink : undefined].join(" ")}>
                            Reports
                        </NavLink>
                    </li>
                    <li className={["nav-item dropdown", styles.navItem, styles.profile].join(" ")}>
                        <i
                            className={["fas fa-user-circle dropdown-toggle", styles.dropdownToggle].join(" ")}
                            data-toggle="dropdown"
                            aria-expanded="false"
                        />
                        <ul className={["dropdown-menu dropdown-menu-right", styles.dropdownMenu].join(" ")}>
                            <li className="dropdown-item" onClick={logout}>
                                Logout
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
