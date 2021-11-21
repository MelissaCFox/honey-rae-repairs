import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../APIManager"

export const CustomerList = () => {
    const [customers, updateCustomers] = useState([])
    const [totalCustomersMessage, updateMessage] = useState("")

    useEffect(
        () => {
            getAllCustomers()
                .then(
                    (customers) => {
                        updateCustomers(customers)
                    }
                )
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            } else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    return (
        <>
            <div>{totalCustomersMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.name}</p>
                    }
                )
            }
        </>
    )
}


