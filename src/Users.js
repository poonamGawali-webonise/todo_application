import React from 'react';

class Users extends React.Component {

  handleUpdate = () => {
    this.props.updateUser(this.indexNum, this.name.value, this.age.value);
  }
  
  render(){
    const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.name = val}} required defaultValue={user.name}/></td>
                    <td><input type="number" ref={(val) => {this.age = val}} required defaultValue={user.age}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn-green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td><button className="btn-white" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className="btn-red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );
        });

    return(
      <table className="striped">
          <thead>
              <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {usersList}
          </tbody>
      </table>
    );
  }
}
export default Users;