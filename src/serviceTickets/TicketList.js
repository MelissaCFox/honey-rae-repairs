import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Tickets.css';


export const TicketList = () => {
    const [tickets, updateTicket] = useState([])
    const history = useHistory()


    const fetchAndUpdateTickets = () => {
        fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
        .then((data) => {
            updateTicket(data)
        })
    }

    useEffect(
        () => {
            fetchAndUpdateTickets()
        },
        []
    )
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        }).then(() => fetchAndUpdateTickets())
    }

    return (
        <>
            <div>
                <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
            </div>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={ticket.id} className={ticket.emergency ? `ticket emergency` : `ticket`}>
                            <div className="ticket__description">
                                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </div>
                            <button onClick={() => {
                                deleteTicket(ticket.id)

                            }}>Delete</button>
                        </div>

                    }
                )
            }
        </>
    )
}