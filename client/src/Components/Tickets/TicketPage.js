import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TicketPage = (props) => {
  const { id } = useParams();
  const [oneTicket, setOneTicket] = useState({});
  const navigate = useNavigate();

useEffect(() => {
  axios
  .get(`http://localhost:8000/api/tickets/${id}`)
  .then((res) => {
    console.log(res);
    console.log(res.data);
    setOneTicket(res.data);
  })
  .catch((err) => console.log(err))
}, [id])

const deleteTicket = () => {
  axios
  .delete(`http://localhost:8000/api/tickets/${id}`)
  .then((res) => {
    console.log(res.data);
    navigate("/")
  })
  .catch((err) => console.log(err))
}
  return (
    <div className="table">
      <h3>Details about: {oneTicket.event}</h3>
      <p>Date of event: {oneTicket.date}</p>
      <p>Location of event: {oneTicket.location}</p>
      <p>Number of Tickets: {oneTicket.numberOfTickets}</p>
      <p>Price: ${oneTicket.price}</p>
      <p>Description: {oneTicket.desc}</p>
      <br/>
      <Link to={"/"} className="link"> Back to home</Link>
      <button onClick={deleteTicket} className="buy">Buy Ticket(s) </button>
    </div>
  );
};

export default TicketPage;
