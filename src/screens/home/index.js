import React, {useContext} from 'react'
import { SwapiContext } from '../../context';
import Header from '../../components/header';
import ListPeople from '../../components/list-people'

const Home = () => {
  const { 
      state: { people },
    } = useContext(SwapiContext)
    
  return (
    <>
      <Header />
      <ListPeople itens={people} />
    </>
  );
}
  
  export default Home