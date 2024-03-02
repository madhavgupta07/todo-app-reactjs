import Welcome from "./component/Welcome"
import Home from "./component/Home"
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/> }/>
          <Route path="/home" element={<Home/> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
