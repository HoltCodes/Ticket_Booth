import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TicketEdit = () => {
  const { id } = useParams();
  const[ event, setEvent ] = useState("");
  const[ date, setDate ] = useState("");
  const[ desc, setDesc ] = useState("");
  const[ location, setLocation ] = useState("");
  const[ price, setPrice ] = useState("");
  const[ numberOfTickets, setNumberOfTickets ] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`http://localhost:8000/api/tickets/${id}`)
    .then((res) => {
      console.log(res.data);
      setEvent(res.data.event);
      setDate(res.data.date);
      setLocation(res.data.location);
      setPrice(res.data.price);
      setNumberOfTickets(res.data.numberOfTickets);
      setDesc(res.data.desc);
    })
    .catch((err) => console.log(err));
  }, [])

    const handleEditTicket = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:8000/api/tickets/${id}`,{
      event,
      date,
      desc,
      location, price, numberOfTickets,
  })
  .then((res) => {
    console.log(res);
    console.log(res.data);
    navigate("/");
  })
    .catch((err) =>console.log(err))
  }

  return (
    <div className="container">
    <h3> Edit: {event}</h3>
    <div className="rows-center">
      <div className="col-3">
      <div className="row">
      <Link to="/">Back to Home</Link>
      </div>
    <form onSubmit={ handleEditTicket }>
    <div className="form-group">
      <label htmlFor="event">Event:</label>
      <input
        type="text"
        id="event"
        className="form-control"
        onChange={(e) => setEvent(e.target.value)}
        value={event}
      />

      <label htmlFor="date">Event Date:</label>
      <input
        type="text"
        id="date"
        className="form-control"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <label htmlFor="location">Event Location:</label>
      <input
        type="text"
        id="location"
        className="form-control"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />

      <label htmlFor="numberOfTickets">Number of Tickets</label>
      <input
        type="text"
        id="numberOfTickets"
        className="form-control"
        onChange={(e) => setNumberOfTickets(e.target.value)}
        value={numberOfTickets}
      />

      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        className="form-control"
        onChange={(e) => setPrice(e.target.value)}
        value={price} 
      />

      <label htmlFor="desc">Description</label>
      <input
        type="text"
        id="desc"
        className="form-control"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
    </div>
        <button className="btn btn-primary mt-3"    type="submit">
           Update Event
        </button>
      </form>
    </div>
    </div>
 </div>
  );
};

export default TicketEdit;