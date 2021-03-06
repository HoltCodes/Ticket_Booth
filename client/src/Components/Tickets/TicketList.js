import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TicketList = (props) => {

  const [ ticketList, setTicketList ] = useState([]);
 

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/tickets")
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setTicketList(res.data);
    })
    .catch((err) => {
      console.log(err.res);
    });
  }, [])

  return(
    <div className="container">
      <h3>Best place to sell your unwanted event tickets</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Date</th>
            <th scope="col">Location</th>
            <th scope="col">Price</th>
            <th scope="col">Number of Ticket(s)</th>
            <th scope="col">Details</th>
          </tr>
          {ticketList.map((ticket, index) => {
            return(
              <tr key={ticket._id}>
                <td>{ ticket.event}</td>
                <td>{ ticket.date}</td>
                <td>{ ticket.location}</td>
                <td>${ ticket.price }</td>
                <td>{ ticket.numberOfTickets}</td>
                <td>
                  <Link to={`/tickets/${ticket._id}`}>Details</Link> | <Link to={`/tickets/edit/${ticket._id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
      <Link className="link" to={`/ticket_form`}>Sell Your Event Tickets</Link>
      {/* <Link to={"/register"}>Login</Link> */}
    </div>
  );
};


export default TicketList;