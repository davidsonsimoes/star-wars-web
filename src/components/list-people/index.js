import React from 'react'
import './style.scss'

const ListPeople = props => {
  const { itens } = props
  return (
    <>
      <ul className="list-people">
        {itens.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
  
  export default ListPeople