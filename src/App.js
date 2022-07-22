import "./App.css";
import Navbar from "./components/Navbar";
import Shipping from "./components/Shipping";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StripeContainer from "./components/StripeContainer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/payments" element={<StripeContainer/>} />
            <Route
              path="/"
              element={[<Navbar />, <Shipping />, <Footer />]}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
