import React from 'react'


const Kurssi = (props) => {
    return(
        props.kurssit.map(x => <li key={x.id}> {x.nimi} {x.tehtavia}</li> )
    )
}
const Otsikko = (props) => {
    return (
        <h2>{props.kurssit}</h2>
     )
}   
const Yhteensa = (props) => {
    const summa = props.kurssit.reduce((x, y) => x + y.tehtavia, 0)
    console.log(summa)
   
    return (
        <p>yhteensä {summa} tehtävää </p>
    )

   
}  

export { Kurssi, Otsikko, Yhteensa };
