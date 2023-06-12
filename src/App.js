import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import DishDetails from "./components/DishDetails";
import Navbar from "./components/Navbar";
import ModeContext from "./context/DarkModeContext";

function App() {
    const [mode, setMode] = useState(false);
    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Menu />} />
                    <Route path="/dish/:id" element={<DishDetails />} />
                </Routes>
            </Router>
        </ModeContext.Provider>
    );
}

export default App;
