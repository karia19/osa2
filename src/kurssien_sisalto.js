

//// App.js /////
////////////////
import React from 'react';
import { Kurssi, Otsikko, Yhteensa }  from './components/Kurssit'

const App = ({kurssit}) => {
    //const Kurssi = (props) => props.kurssit.map(x => <li key={x.id}> {x.nimi} {x.tehtavia}</li> );
    
    return (
      
      <div>
        <Otsikko kurssit={kurssit[0].nimi}/>  
        <Kurssi kurssit={kurssit[0].osat} />
        <Yhteensa kurssit={kurssit[0].osat}/>
        <Otsikko kurssit={kurssit[1].nimi}/>
        <Kurssi kurssit={kurssit[1].osat} />  
        <Yhteensa kurssit={kurssit[1].osat}/>
      </div>
      
    
    )
}
export default App;


///// Index.js //////
////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'


const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]


ReactDOM.render( <App kurssit={kurssit} />, document.getElementById('root'))


//// Kurssit.js /////
/////////////////////

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


