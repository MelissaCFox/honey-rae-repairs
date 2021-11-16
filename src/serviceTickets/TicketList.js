import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Tickets.css';

export const TicketList = () => {
    const [tickets, updateTicket] = useState([])
    const history = useHistory()


    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTicket(data)
                })
        },
        []
    )


    return (
        <>
            <div>
                <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
            </div>
            {
                tickets.map(
                    (ticket) => {
                        return <p key={ticket.id} className={ticket.emergency ? `ticket emergency` : `ticket`} >
                        {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                    </p>
                    
                    }
                )
            }
        </>
    )
}