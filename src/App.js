import Home from "./Pages/Home";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>

      <div className="containerMain">
        <SideBar></SideBar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
