import React from 'react';


const Peapol = ({ persons, nappiaPainettu }) => {
   console.log(persons) 
   return(
       <li>{persons.name} {persons.number} <button onClick={nappiaPainettu}> poista </button></li>
   )

}

export default Peapol;
