import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Room from "./pages/room/Room";
import NotFound from "./pages/notfound/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-screen">
        <header className="min-h-[6vh] bg-slate-1000">
          <Navbar />
        </header>
        <div className="App w-screen h-screen bg-zinc-900">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/room" element={<Room />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
