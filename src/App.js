import "./App.scss";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className ="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
