
export const getCustomerByEmail = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
        .then(res => res.json())
}

export const getCustomerByCustomerEmail = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
        .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => res.json())
}

export const getAllTickets = () => {
    return fetch("http://localhost:8088/tickets")
        .then(res => res.json())
}

export const getEmployeeByIdWithServiceTickets = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}?_embed=serviceTickets`)
        .then(res => res.json())
}

export const getAllTicketsWithCustomersAndEmployees = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
}

export const getTicketByIdWithCustomersAndEmployees = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
        .then(response => response.json())
}



export const createUser = (customer) => {
    return fetch("http://localhost:8088/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
        .then(res => res.json())
}

export const createEmployee = (newEmployee) => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    })
}

export const createTicket = (newTicket) => {
    return fetch("http://localhost:8088/serviceTickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTicket)
    })
}

export const updateTicket = (ticketId, updatedTicket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTicket)
        })
}

export const removeTicket = (id)=> {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
}