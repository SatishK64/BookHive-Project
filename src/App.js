import './App.css';
import SplHeader from './Components/SplHeader.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Find from './routes/Find.jsx';
import Lend from "./routes/Adder.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <SplHeader />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Rent" element={<Find />} />
        <Route path="/Lend" element={<Lend />} />
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
