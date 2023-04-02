import './App.css';
import Header from './components/Header';
import Resume from './pages/Resumepage/MyResume';
import Home from './pages/Homepage/Home';
import Footer from './components/Footer';
import BiReport from './pages/PowerPlatform/PowerPlat';

const siteProps = {
  email: "Julia@example.com",
  gitHub: "juliamuiruri4",
  instagram: "juliamuiruri4",
  linkedIn: "juliamuiruri",
  twitter: "juliamuiruri4",
  youTube: "juliamuiruri",
  name: "Julia Muiruri"
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Resume />
      <BiReport />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
}

export default App;
