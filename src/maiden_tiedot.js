import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filtter: '',
      countryData: [],
      clickCounrty: ''
    }
  }
  handelFilter= (e) => {
    this.setState ({ filtter: e.target.value })
    this.setState ({ clickCounrty: ''})
  }
  componentDidMount() {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      this.setState ({ countryData: res.data })
    })
  }
  handelClick = (e) => {
     this.setState ({ clickCounrty: e })
  }


  render() {
    //console.log(this.state.filtter)
    //console.log(this.state.countryData)
    console.log(this.state.clickCounrty)

    const Clicked = () => {
      if (this.state.clickCounrty){
        const valittu = this.state.countryData.filter(x => x.name === this.state.clickCounrty)
        console.log(valittu)
        return(
           <div>
             <p>capital: {valittu.map(x => x.capital)}</p>
             <p>population: {valittu.map(x => x.population)}</p>
             <img src={valittu.map(x => x.flag)} />

           </div>
        
         
        )
      }
      return(
        <p></p>
      )
    }

    const Find = () => {
      const fil = this.state.countryData.filter((x) => x.name.toLowerCase().startsWith(this.state.filtter))
    

      if (fil.map(x => x.name).length >= 10) {
         return (
           <div>
           <p>Too many matches</p>
           </div>
          
         )
      } else if (fil.map(x => x.name).length <= 10 && fil.map(x => x.name).length >= 2){
         return(
            <div>
              {fil.map(x => <li key={x.name} onClick={this.handelClick.bind(this, x.name)}> {x.name} </li>)}
            </div>
           
           
          )
      //.map(x => <li key={x.name} > {x.name}</li>)

      } return(
           <div>
             <p>capital: {fil.map(x => x.capital)}</p>
             <p>population: {fil.map(x => x.population)}</p>
             <img src={fil.map(x => x.flag)} />

           </div>
        )
      
      
    }
    
    
    
    return (
       <div>
         <form>
           <div>
             find countries: <input value={this.state.filtter} 
             onChange={this.handelFilter}/>
           </div>
         </form>
         < Find />
         < Clicked />


       </div>
    )
  }
}

export default App