import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="about-me" element={<div></div>}/>
                <Route path="projects" element={<div></div>}/>
                <Route path="contacts" element={<div></div>}/>
            </Routes>
        </Router>
    );
}

export default App;
