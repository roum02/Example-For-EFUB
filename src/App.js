import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
