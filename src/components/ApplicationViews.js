import React from "react"
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketList } from "../serviceTickets/TicketList";
import { TicketForm } from "../serviceTickets/TicketForm";
import { EmployeeForm } from "./employees/EmployeeForm";
import { Ticket } from "../serviceTickets/Ticket";
import { Employee } from "./employees/Employee";

export const ApplicationViews = () => {
    return (
        <>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            
            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>

            <Route exact path="/employees/hire">
                <EmployeeForm />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route path="/ticket/create">
                <TicketForm />
            </Route>

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>

        </>
    )
}
//^^Route path for individual tickets (:ticketId(/d+)) checks to make sure the ticketId that's passed through is a number