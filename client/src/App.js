import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import TicketForm from './Components/Tickets/TicketForm';



function App() {
  return (
    <div className="App">
      <h1>Ticket Booth</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register/> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/ticket_form" element={<TicketForm/> } /> 

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
