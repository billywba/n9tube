import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Homepage from './pages/homepage/Homepage';
import Room from './pages/room/Room';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
