import './App.css';
import Header from './components/header/Header'; 
import Info from './components/info/Info';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
     <Header />
     < Projects />
     <Info />
     <Footer />
    </div>
  );
}

export default App;
