import './App.css';

import NavBar from './shared/NavBar/NavBar';
import Container from './components/Container/Container';



function App() {

  return (
      <main className="App">
        {/* <header> */}
          <NavBar />

        {/* </header> */}
        <Container />
      </main>
    
  )
}

export default App;
