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
  const handleAddTicket = (e) => {
    e.preventDefault();
    console.log({
      event,
      date,
      desc,
      location, price, numberOfTickets,
    });
    axios
    .post("http://localhost:8000/api/tickets",{
      event,
      date,
      desc,
      location, price, numberOfTickets,
    })
    .then((res) => {
      console.log("success", res);
      navigate("/");
    })
    .catch((err) => {
      console.log("error", err.res);
      setErrors(err.response.data.errors);
    });
  };
  return (
    <div className="container">
      <h2>Sell your Tickets</h2>
      <div className="rows">
        <div className="col-5">
          <div className="row">
          <Link to="/">Back to Home</Link>
          </div>
          <form onSubmit={ handleAddTicket }>
            <div className="form-group">
              <label htmlFor="event">:</label>
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

              <label htmlFor="numberOfTickets">Number of Tickets</label>
              <input
                type="text"
                id="numberOfTickets"
                className="form-control"
                onChange={(e) => setNumberOfTickets(e.target.value)}
              />


              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />

              <label htmlFor="desc">Description</label>
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