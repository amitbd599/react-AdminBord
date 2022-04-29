import Home from "./Pages/Home";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import WidgetLg from "./Components/WidgetLg/WidgetLg";
import WidgetSm from "./Components/WidgetSm/WidgetSm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./Pages/User/UserList";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <TopBar></TopBar>

          <div className="containerMain">
            <SideBar></SideBar>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
          </div>
        </div>
      </Switch>{" "}
    </Router>
  );
}

export default App;
