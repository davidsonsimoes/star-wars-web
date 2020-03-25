import React, {useContext} from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import { SwapiContext } from '../../context';
import './style.scss'


const PeopleDetailsComponent = props => {
  const { 
    state: { 
      starships, 
      isLoadingstarships,
      films,
      isLoadingfilms,
      species,
      isLoadingspecies },
    action: { getAsyncContent }
  } = useContext(SwapiContext)

  const {people} = props;

  isLoadingstarships && getAsyncContent('starships', people.starships)
  isLoadingfilms && getAsyncContent('films', people.films)
  isLoadingspecies && getAsyncContent('species', people.species)

  return (
  <div className="content-people">
    <h1>{people.name}</h1>
    <div className="row">
      <div className="col">
        <h2>People Details</h2>
        <ul>
          {people.height && <li>height: {people.height}</li>}
          {people.mass && <li>mass: {people.mass}</li>}
          {people.skin_color && <li>skin color: {people.skin_color}</li>}
          {people.eye_color && <li>eye color: {people.eye_color}</li>}
          {people.gender && <li>gender: {people.gender}</li>}
        </ul>
      </div>
      <div className="col">
        {isLoadingfilms ? 
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={150} />
        </SkeletonTheme> :
        <>
          <h2>Films</h2>
          <ul>  
            {films.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </>}
      </div>
      <div className="col">
      {isLoadingspecies ? 
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={150} />
        </SkeletonTheme> :
        <>
          <h2>Species</h2>
          <ul>  
            {species.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
          </ul>
        </>}
      </div>
      <div className="col">
      {isLoadingspecies ? 
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={150} />
        </SkeletonTheme> :
        <>
          <h2>Starships</h2>
          <ul>  
            {starships.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
          </ul>
        </>}
      </div>
    </div>
  </div>
  )
}

export default PeopleDetailsComponent;