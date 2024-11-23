import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navigation />
        <Index />
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
