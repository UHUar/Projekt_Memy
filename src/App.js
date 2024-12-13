import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Hot } from "./components/Hot";
import { Regular } from "./components/Regular";
import "./App.css";

const initMemes = [
  { title: "MEM1", img: "https://d-art.ppstatic.pl/kadry/k/r/1/79/5f/5fa443905003b_o_xlarge.jpg", ups: 10, downs: 4 },
  { title: "MEM2", img: "https://d-art.ppstatic.pl/kadry/k/r/1/bd/06/5fa4437712230_o_xlarge.jpg", ups: 5, downs: 4 },
  { title: "MEM3", img: "https://d-art.ppstatic.pl/kadry/k/r/1/2a/77/5fa44360eaf91_o_xlarge.jpg", ups: 8, downs: 4 },
  { title: "MEM4", img: "https://d-art.ppstatic.pl/kadry/k/r/1/0d/6d/5fa44364085ea_o_xlarge.jpg", ups: 8, downs: 4 },
];

function App() {
  const [memes, setMemes] = useState(() => {
    const storedMemes = localStorage.getItem("memes");
    return storedMemes ? JSON.parse(storedMemes) : initMemes;
  });

  useEffect(() => {
    localStorage.setItem("memes", JSON.stringify(memes));
  }, [memes]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="sidebar">
          <ul>
            <li><Link to="/hot">Hot</Link></li>
            <li><Link to="/regular">Regular</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/hot" element={<Hot memes={memes} setMemes={setMemes} />} />
          <Route path="/regular" element={<Regular memes={memes} setMemes={setMemes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
