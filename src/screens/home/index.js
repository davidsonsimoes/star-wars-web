import React, {useContext} from 'react';
import ReactPaginate from 'react-paginate';
import { SwapiContext } from '../../context';
import Header from '../../components/header';
import ListPeople from '../../components/list-people';
import ListSkeleton from '../../components/list-skeleton';

const Home = () => {
  const { 
      state: { people, isLoading },
      action: { getPeople }
    } = useContext(SwapiContext)

  return (
    <>
      <Header />
      {isLoading ? <ListSkeleton itens={10} /> : <ListPeople itens={people} />}
      <ReactPaginate
        previousLabel={'anterior'}
        nextLabel={'próximo'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={9}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={event => getPeople(event.selected+1)}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </>
  );
}
  
  export default Home