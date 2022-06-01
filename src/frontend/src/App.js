import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
