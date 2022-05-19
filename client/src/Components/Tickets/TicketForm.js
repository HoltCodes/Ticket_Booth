import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TicketForm = () => {
  const[ event, setEvent ] = useState("");
  const[ date, setDate ] = useState("");
  const[ desc, setDesc ] = useState("");
  const[ location, setLocation ] = useState("");
  const[ price, setPrice ] = useState("");
  const[ numberOfTickets, setNumberOfTickets ] = useState("");
  const navigate = useNavigate();
  const [ errors, setErrors ] = useState({});
  const [authError, setAuthError] = useState("");
  
  const handleAddTicket = (e) => {
    const newTicket = {
      event,
      date,
      desc,
      location,
      price,
      numberOfTickets,
    };
    axios
    .post("http://localhost/api/post", newTicket, {
      withCredentials: true,
    })
    .then((newTicket) => {
      setErrors({});
      setAuthError();
      console.log(newTicket);
    })
    .catch((err) => {
      console.log(err.message);
      if (err.response.status === 400) {
        setAuthError("You must first  login to add a ticket");
      } else {
        setErrors(err.response.data.error.errors);
      }
    });
  };

  return (
    <div className="container">
      <h2>Sell your Tickets</h2>
      <div className="rows">
        <div className="col-5">
          <div className="row">
          <Link to="/ticketList">Back to Home</Link>
          </div>
          <form onSubmit={ handleAddTicket }>
            <div className="form-group">
              <label htmlFor="event">Event:</label>
              <input
                type="text"
                id="event"
                className="form-control"
                onChange={(e) => setEvent(e.target.value)}
              />
              {errors.event && <p style={{ color: "red" }}>{ errors.event.message }</p>}

              <label htmlFor="date">Event Date:</label>
              <input
                type="text"
                id="date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <p style={{ color: "red" }}>{ errors.date.message }</p>}

              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                className="form-control"
                onChange={(e) => setLocation(e.target.value)}
              />
              {errors.location && <p style={{ color: "red" }}>{ errors.location.message }</p>}

              <label htmlFor="numberOfTickets">Number of Tickets:</label>
              <input
                type="text"
                id="numberOfTickets"
                className="form-control"
                onChange={(e) => setNumberOfTickets(e.target.value)}
              />


              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />

              <label htmlFor="desc">Description:</label>
              <input
                type="text"
                id="desc"
                className="form-control"
                onChange={(e) => setDesc(e.target.value)}
              />


            </div>
            <button className="btn btn-primary mt-3" type="submit">
             Sell Ticket(s)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;