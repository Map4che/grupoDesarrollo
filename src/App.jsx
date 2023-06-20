import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/1.home/Login";
import Register from "./pages/1.home/Register";
import Recover from "./pages/1.home/Recover";
import './App.css'

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/recover" exact element={<Recover/>}/>
    </Routes>
   </Router>
  )
}

export default App;
