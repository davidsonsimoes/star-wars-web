import React from 'react'
import { Link } from "react-router-dom";
import { FaRocket, FaFilm, FaGlobe } from 'react-icons/fa'
import './style.scss'

const ListPeople = props => {
  const { itens } = props
  return (
    <>
      <ul className="list-people">
        {itens.map((item, i) => (
          <Link to={{
            pathname: `/people/${i}`,
            state: { people: item }
            }}>
            <li key={i}>
              {item.name}
              
              <span className="align-right"> 
                {item.homeworld && (
                  <span className="content-icon">
                    <FaGlobe />
                  </span>
                )}
                {item.films && item.films.length > 0 && (
                  <span className="content-icon">
                    <FaFilm />
                    <span className="qtd">{item.films.length}</span>
                  </span>
                )}
                {item.starships && item.starships.length > 0 && (
                  <span className="content-icon">
                    <FaRocket />
                    <span className="qtd">{item.starships.length}</span>
                  </span>
                )}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
  
  export default ListPeople