import React from "react";
import Sidebar from "./sections/Sidebar";
import Main from "./sections/Main";
import { BrowserRouter as Router, Route, Routes }
from "react-router-dom";
import Messages from "./sections/Messages";


function App() {
  return (
    <Router>
    <main className="w-full bg-slate-100 h-screen flex justify-between items-start">
      <Sidebar />
      <Routes>
          <Route path="/dashboard" element={<Main />} />
          <Route path="/Messages" element={<Messages />} /> 
        </Routes>
      <Main />
    </main>
    </Router>
  );
}

export default App;
