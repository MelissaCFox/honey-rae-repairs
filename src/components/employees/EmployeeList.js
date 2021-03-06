import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getAllEmployees } from "../APIManager"

export const EmployeeList = () => {
    const [employees, updateEmployee] = useState([])
    const [specialities, updateSpecialties] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then((data) => {
                    updateEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
       updateSpecialties(
           employees.map(
               (employee) => {
                   return `${employee.specialty}`
               }
           ).join(", ")

       )
    }, [employees])

    return (

        <>
            <div>
                <button onClick={() => history.push("/employees/hire")}>Hire Employee</button>
            </div>

            <div>
                Specialties: {specialities}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}