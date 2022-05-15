import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketList from './Components/Tickets/TicketList';
import TicketForm from './Components/Tickets/TicketForm';
import TicketPage from './Components/Tickets/TicketPage';
import TicketEdit from './Components/Tickets/TicketEdit';
import Register from './Components/SignUp/Register';



function App() {
  return (
    <div className="App">
      <h1>Ticket Booth</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/add" element={<TicketForm/> } /> 
          <Route path="/signup" element={<Register/> } />
          <Route path="/" element={<TicketList/>} />
          <Route path="/tickets/:id" element={<TicketPage/> } />
          <Route path="tickets/edit/:id" element={<TicketEdit/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
