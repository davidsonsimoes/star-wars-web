import React, {useContext, useEffect} from 'react'
import Splash from './components/splash';
import Home from './screens/home';

import { SwapiContext } from './context';

const App = () => {

  const { 
    state: { people },
    action: { getPeople }
  } = useContext(SwapiContext)

  useEffect(() => {
    getPeople(1)
  }, [1])

  return (
    <>
      { (people.length > 0) ? <Home /> : <Splash /> }
    </>
  );
}

export default App