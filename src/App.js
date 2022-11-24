import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import AboutMe from "./pages/AboutMe";
import Projects from './pages/Projects';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="about-me" element={<AboutMe />}/>
                <Route path="projects" element={<Projects />}/>
                <Route path="contacts" element={<div></div>}/>
            </Routes>
        </Router>
    );
}

export default App;
