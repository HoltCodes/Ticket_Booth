import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import TicketForm from "./Components/Tickets/TicketForm";
import TicketList from "./Components/Tickets/TicketList";
import TicketPage from "./Components/Tickets/TicketPage";
import TicketEdit from "./Components/Tickets/TicketEdit";




function App() {
  return (
    <div className="App">
      <h1>Ticket Booth</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register/> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/" element={<TicketList/> } />
          <Route path="/ticket_form" element={<TicketForm/> } /> 
          <Route path="/ticketList" element={<TicketList/> } />
          <Route path="/tickets/:id" element={<TicketPage/> } />
          <Route path="/tickets/edit/:id" element={<TicketEdit/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
