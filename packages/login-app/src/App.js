import { BrowserRouter as Router } from "react-router-dom";

import CustomRoutes from "./CustomRoutes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <CustomRoutes />
      </Router>
    </div>
  );
}

export default App;
