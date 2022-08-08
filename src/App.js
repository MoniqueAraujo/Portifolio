import "./index.css";
import Header from "../src/components/Header";
import Welcome from "./components/Welcome";
import Iam from "./components/I am";
import Apprenticeship from "./components/Apprenticeship";
import Cards from "./components/Cards";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App container">
      <Header />
      <Welcome />
      <Iam />
      <Apprenticeship />
      <Cards />
      <Contacts />
    </div>
  );
}

export default App;
