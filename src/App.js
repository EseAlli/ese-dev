import '../src/styles/index.scss';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Jobs/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
