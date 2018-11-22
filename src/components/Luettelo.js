import React from 'react';


class Tulosta extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            filtteri: '',
            tiedot: props.persons
        }
    }
    filtteri = (e) => {
        this.setState ({ filtteri: e.target.value })
    }
    
    render() {
        console.log(this.state.tiedot)
        const Tulosta = (props) => {
            
            return (

                <p> </p>
                //props.persons.filter((x) => x.name.toLowerCase().startsWith(this.state.filtteri)) 
                //   .map(x => <li key={x.name}> {x.name} {x.number}</li>)
            )
        }
    

        return (
           
            <form>
                <div>
                    rajaa haettavat: <input value={this.state.filtteri}
                    onChange={this.handleFiltter}
                    />
                </div>

                < Tulosta />
            </form>
        )
    }

}





export default Tulosta;