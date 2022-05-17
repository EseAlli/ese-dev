import '../src/styles/index.scss';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
