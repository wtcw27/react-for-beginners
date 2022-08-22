import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/abot-us" element={<h1>Hello</h1>} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;