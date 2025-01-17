import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Bin from "./pages/Bin";
import About from "./pages/About";
import BinContent from "./pages/BinContent";

function App() {
    return (
        <div className="bg-background min-h-screen">
            <Router>
                <div className="relative">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/bin" element={<Bin/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/bin-content" element={<BinContent/>}/> {/* New Route */}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

