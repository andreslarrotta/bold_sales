import { Header } from "./containers/Header";
import { Sales } from "./containers/Sales";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_container">
        <Sales />
      </div>
    </div>
  );
}

export default App;
