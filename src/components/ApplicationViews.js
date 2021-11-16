import React from "react"
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketList } from "../serviceTickets/TicketList";
import { TicketForm } from "../serviceTickets/TicketForm";
import { EmployeeForm } from "./employees/EmployeeForm";

export const ApplicationViews = () => {
    return (
        <>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
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

        </>
    )
}