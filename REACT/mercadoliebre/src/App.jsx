import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Results from './pages/Results';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

import './assets/css/app.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/results" component={Results}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/edit" component={Edit}/>
          <Route component={NotFound}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
