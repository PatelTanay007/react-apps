import './App.css';
import Pizza from './Pizza';

function App() {
  return (
     <div className="App">
      <h2>Pizza Menu</h2>
      <Header />
      <Menu />
      <Footer />
     </div>
  );
    
}

const Header =() => {
  return (
    <header className="App-header">
      <h1>pizza_company_name</h1>
    </header>
  );
}

const Menu = () => {
  return (
    <>
    <h2>our Menu</h2>
    <Pizza />
    </>
  );
}

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>© 2025 pizza_company_name</p>
    </footer>
  );
}

export default App;
