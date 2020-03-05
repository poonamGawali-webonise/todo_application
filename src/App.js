import React from 'react';
import './App.css';
import Users from './Users';
import AddUser from './AddUser';
import Details from './Details';
import PersonList from './PersonList'

class App extends React.Component {
  state = {

    users:[
      {name:"Poonam Gawali", age:25, isEditing:false},
      {name:"Amol Gawali", age:27, isEditing:false},
      {name:"Kavita Gawali", age:42, isEditing:false},
      {name:"Prabhakar Gawali", age:42, isEditing:false},
    ]
  }

  addUser = (newUser) => {
    let users = [...this.state.users, newUser];
    this.setState({
        users
    });     
  }

  pressDelete = (i) => {
    let users = this.state.users.filter((u,index)=>{
        return index !== i;
    });
    this.setState({
        users
    });
  }

  pressEditBtn = (i) => {
    let users = this.state.users;
    users[i].isEditing = true;
    this.setState({
        users
    });
  }

  updateUser = (i, name, age) => {
    let users = this.state.users;
    users[i].name = name;
    users[i].age = age;
    users[i].isEditing = false;

    this.setState({
        users
    });

  }

  
  render() {
    return ( 
  <div className="row">
    <div className="col s12">
      <div className="col s6">
        <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete}/>
      </div>
      <div className="col s6">
        <AddUser addUser={this.addUser}/>
      </div>
      <div>
        <Details source="./data.json"/>
      </div>
      <div>
        <PersonList />
      </div>
    </div>
  </div>
    );
  }
}

export default App;
