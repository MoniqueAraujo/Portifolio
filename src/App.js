import './index.css';
import Header from '../src/components/Header';
import Welcome from './components/Welcome';
import Iam from './components/I am';
import Conhecimentos from './components/Conhecimentos';

function App() {
  return (
    <div className="App container" >
      <Header />
      <Welcome />
      <Iam />
      <Conhecimentos />

    </div >
  );
}

export default App;
