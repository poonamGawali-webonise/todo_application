import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
    state = {
        persons : [],
        name: ''
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log('post method response :',res);
            console.log(res.data);
          })
      }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result) => {
            this.setState({persons: result.data});
            console.log('get method response :', this.state.persons);
        })
        .catch((err) => {
            throw err;
        })
    }

    render () {
        return (
            <div>
                <h4>Axios REST API with Readymade service url</h4>
                <h5>1. GET </h5>
                <ul>
                    {this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
                <h5>2. POST</h5>
                <div>
                    <form onSubmit={this.handleSubmit} className='formSubmit'>
                        <label>
                            Person Name:
                            <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
} 

export default PersonList;