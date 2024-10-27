import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Compounents/Home";
import Inicio from "./Compounents/Inicio";
import ConsultaTurno from "./Compounents/ConsultaTurno";
import NuevoTurno from "./Compounents/NuevoTurno";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/inicio" Component={Inicio}/>
          <Route exact path="/consulta-turno" Component={ConsultaTurno}/>
          <Route exact path="/nuevo-turno" Component={NuevoTurno}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
