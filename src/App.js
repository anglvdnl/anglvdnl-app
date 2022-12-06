import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import BackgroundLayout from './layouts/BackgroundLayout';

function App() {
    return (
        <BackgroundLayout>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about-me" element={<AboutMe/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                </Routes>
            </Router>
        </BackgroundLayout>
    );
}

export default App;
