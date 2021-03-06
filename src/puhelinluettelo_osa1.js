import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' },
        { name: 'Hannu Hanhi', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filtteri: ''
    }
  }
  addPerson = (e) => {
      e.preventDefault()
      const uusiObject = {
          name: this.state.newName,
          number: this.state.newNumber
      }
      const persons = this.state.persons.concat(uusiObject)

      this.state.persons.some(x => x.name === this.state.newName) ?
      alert('Oli jo listassa'):
      this.setState ({ persons: persons })
      this.setState ({ newName: '' , newNumber: '' }) 
      
      
      
      
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
 
  render() {
      console.log(this.state.filtteri);
      
      const Tulosta = () => {
          return (
              this.state.persons.filter((x) => x.name.toLowerCase().startsWith(this.state.filtteri)) 
                 .map(x => <li key={x.name}> {x.name} {x.number}</li>)
          )
      }
      
    
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        
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
        < Tulosta  />
      </div>
    )
  }
}

export default App