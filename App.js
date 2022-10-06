import './App.css';
import Home from './Home.js';
import Header from './Header';
import Footer from './Footer.js';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>

      <Header />
      <Switch>
      <Route path="/search">
      <SearchPage />
      </Route>
      
      <Route path="/">
      <Home />
      </Route>
      
      </Switch>
      
      
      
      <Footer />



      </Router>
      
{/* home */}
      {/* header */}

      {/* banner */}

      {/* cards */}

      {/* footer */}

      {/* search-page */}

        
    </div>
  );
}

export default App;
