import React, {useContext, useEffect} from 'react'
import Splash from './components/splash';
import Home from './screens/home';
import { SwapiContext } from './context';
import './App.scss';

const App = () => {

  const { 
    state: { people },
    action: { getPeople }
  } = useContext(SwapiContext)

  useEffect(() => {
    getPeople(1)
  }, [1])

  return (
    <div className="App">
      { (people.length > 0) ? <Home /> : <Splash /> }
    </div>
  );
}

export default App