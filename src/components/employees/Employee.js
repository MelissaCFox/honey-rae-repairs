import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByIdWithServiceTickets } from "../APIManager"

export const Employee = () => {
    const [employee, set] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            getEmployeeByIdWithServiceTickets(employeeId)
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of employeeId change
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__description">{employee.name}</h3>
                <div className="employee__specialty">Specialty: {employee.specialty}</div>
                <div className="employee__assignedTickets">Number of Assigned Service Tickets: {employee.serviceTickets?.length}</div>
            </section>
        </>
    )
}

