import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, updateEmployee] = useState([])
    const [specialities, updateSpecialties] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
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
                Specialties: {specialities}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}