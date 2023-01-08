import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="app">
      <Router>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
