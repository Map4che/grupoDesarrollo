import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../pages/Login/Login";
import '../styles/App.css'
import Register from "../pages/Register/Register";
import Recover from "../pages/Recover/Recover";

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
