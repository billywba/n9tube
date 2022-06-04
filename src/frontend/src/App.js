import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Homepage from './pages/homepage/Homepage';
import Room from './pages/room/Room';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header bg-slate-900"> 
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/room" element={<Room />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
