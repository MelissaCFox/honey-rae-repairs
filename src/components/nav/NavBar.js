import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
            <div className="navBarLinks">
                <ul className="navbar">
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/customers">Customers</Link>
                    </li>
                </ul>

                <ul className="navbar">
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/employees">Employees</Link>
                    </li>
                </ul>

                <ul className="navbar">
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/tickets">Service Tickets</Link>
                    </li>
                </ul>
                <ul>
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="#"
                            onClick={
                                () => {
                                    localStorage.removeItem("honey_customer")
                                }
                            } >
                            Logout
                        </Link>
                    </li>

                </ul>
            </div>


        </>
    )
}