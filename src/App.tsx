import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Information from "./pages/Information";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ananproject/" element={<Home />} />
                    <Route path="/ananproject/trangchu" element={<Home />} />
                    <Route
                        path="/ananproject/tintuc"
                        element={<Information />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
