import './index.css';
import Header from '../src/components/Header';
import Welcome from './components/Welcome';
import Iam from './components/I am';
import Conhecimentos from './components/Conhecimentos';
import Cards from './components/Cards';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App container" >
      <Header />
      <Welcome />
      <Iam />
      <Conhecimentos />
      <Cards />
      <Contacts />

    </div >
  );
}

export default App;
