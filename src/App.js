import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div>
      <MyNavBar title="StriveStaurant" />
      <MyWelcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
