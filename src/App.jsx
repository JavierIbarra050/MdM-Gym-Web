import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/dashboard" element={<div>Dashboard (Segunda Landing)</div>} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;