import axios from 'axios';

//const url = 'https://sheltered-retreat-60028.herokuapp.com/api/persons'
const url = 'http://localhost:3001/persons';

const getData = () => {
    return axios.get(url)
}

const create = (newOb) => {
     return axios.post(url, newOb)
}
const poista = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
    
}
const upDate = (id, newOb) => {
    return axios.put(`${url}/${id}`, newOb)
}


export default { getData, create, poista, upDate }