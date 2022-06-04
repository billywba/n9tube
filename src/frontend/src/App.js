import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Room from "./pages/room/Room";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-slate-1000" /> 
       <div className="App bg-zinc-900">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/room" element={<Room />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
