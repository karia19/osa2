import React from 'react';
import personData from './services/persons'
import Peapol from './components/LuetteloData';
import './index.css'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filtteri: '',
      error: null
       

    }
  }
  addPerson = (e) => {
      e.preventDefault()
      const uusiObject = {
          name: this.state.newName,
          number: this.state.newNumber
      }
      const persons = this.state.persons.concat(uusiObject)
    
      if (this.state.persons.some(x => x.name === this.state.newName)){
      
      window.confirm(`${this.state.newName}, on jo listassa vaihdetaanko numero`)
         const muutos = this.state.persons.find(x => x.name === this.state.newName)
         const changeMuutos = {... muutos, number:this.state.newNumber }
      //console.log(muutos)
      //console.log(changeMuutos)
         personData
           .upDate(changeMuutos.id, changeMuutos)
           .then(response => {
            this.setState({
                persons: this.state.persons.map(x => x.name !== this.state.newName ? x:response.data),
                error: `${this.state.newName} numero muutettiin onnistuneesti`
            })
            setTimeout(() => {
              this.setState({ error: null })
            }, 2000)
            
          })
          .catch(error => {
            this.setState({ error: 'henkilön tiedot ovat jo poistettu'})
            console.log(error)
          })  
          setTimeout(() => {
            this.setState({ error: null })
          }, 2000)
        
        
         

          
           
      
      } else {  
      //alert('Oli jo listassa'):
        this.setState ({ persons: persons })
        //this.setState ({ newName: '' , newNumber: '' })
        personData
          .create(uusiObject)
          .then(res => {
            this.setState ({ 
                persons: this.state.persons.map(x => x.name !== this.state.newName ? x:res.data),
                error: `${this.state.newName} lisättiin onnistuneesti`
              
            })
          
            setTimeout(() => {
                this.setState({ error: null })
              }, 2000)
            }) 
            .catch(error => {
              this.setState({ error: 'henkilön tiedot ovat jo poistettu'})
              console.log(error)
            })   
            setTimeout(() => {
              this.setState({ error: null })
            }, 2000)
             
       
        
        /// Virhe ilomoitus ////
        
          
      }
     
      /*
      if (window.confirm(`${this.state.name}, on jo listassa vaihdetaanko numero`)){
        const idd = this.state.persons.filter(x => x.name === this.state.name).map(x => x.id)
        personData
          .upDate(idd, this.state.newNumber)
      }
      */

      
      
          
  }
  
  componentDidMount() {   
    personData
        .getData()
        .then(res => {
          this.setState ({ 
            persons: res.data
          })
     
    })
   
  }
  handelChange = (e) => {   
      this.setState ({ newName: e.target.value })
  }
  handleNumber = (e) => {
      this.setState ({ newNumber: e.target.value })
  }
  handleFiltter = (e) => {
    this.setState ({ filtteri: e.target.value })
  }
  nappiaPainettu = (id) => {
    return () => {
      if (window.confirm(`poistetaankon ${this.state.persons.filter(x => x.id === id).map(x => x.name)}`)){
      console.log(id)
      personData
        .poista(id)
        .then( res => {
          this.setState ({ 
            persons: this.state.persons.filter (x => x.id !== id),
            error: `käyttäjän ${id} tiedot poistettiin`
          
          })
          setTimeout(() => {
            this.setState({ error: null })
          }, 2000)
          })  
          .catch(error => {
            this.setState({ error: 'henkilön tiedot ovat jo poistettu'})
            console.log(error)
          })  
          setTimeout(() => {
             this.setState({ error: null })
          }, 5000)
      }
     
      
    }
   
    
    
  }
 
  render() {
      console.log(this.state.filtteri);

      const Notification = ({ message }) => {
        if (message === null ){
           return null
        }
        return (
          <div
            className="error">
            {message}
          </div>
        )

      }

      ////// Teh * ///////
      /*
      const Rajaa = () => {      
        return (
            this.state.persons.filter((x) => x.name.toLowerCase().startsWith(this.state.filtteri)) 
               .map(x => <ul> <li key={x.name}> {x.name} {x.number}</li> </ul>)
              
        )
      }
      */
     const rajaa = 
        this.state.persons ?
        this.state.persons.filter((x) => x.name.toLowerCase().startsWith(this.state.filtteri)) :
        this.state.persons

     
      console.log(rajaa)
    
      
    
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.error} />
        
            <form>
                <div>
                    rajaa haettavat: <input value={this.state.filtteri}
                    onChange={this.handleFiltter}
                    />
                </div>
            </form>

        <h2>Lisää uusi</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newName}
                 onChange={this.handelChange} />
          </div>
          <div>
            numero: <input value={this.state.newNumber}
                 onChange={this.handleNumber} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>
        < ul>
           {rajaa.map(persons => 
             <Peapol
             key={persons.id}
             persons={persons}
             nappiaPainettu={this.nappiaPainettu(persons.id)}
             />
           

             
            )
            }

        </ul>
        
       
        
       
      </div>
    )
  }
}

export default App



