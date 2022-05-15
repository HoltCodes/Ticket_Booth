import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketList from './Components/TicketList';
import TicketForm from './Components/TicketForm';
import TicketPage from './Components/TicketPage';
import TicketEdit from './Components/TicketEdit';


function App() {
  return (
    <div className="App">
      <h1>Ticket Booth</h1>
      <BrowserRouter>
      <Routes>
      <Route path="/add" element={<TicketForm/> } /> 
          <Route path="/" element={<TicketList/>} />
          <Route path="/tickets/:id" element={<TicketPage/> } />
          <Route path="tickets/edit/:id" element={<TicketEdit/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
