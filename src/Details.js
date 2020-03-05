import React from 'react';

var axios = require('axios');

class Details extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          concerts: []
        };
      }

        componentDidMount() {
        var th = this;
        
        this.serverRequest =
            axios.get(this.props.source)
                .then(function(result) {
                    th.setState({
                        concerts: result.data.details
                    });
                }).catch((err)=> {})
    }
    
        componentWillUnmount() {
        this.serverRequest.abort();
    }
    
        render(){
            return (
                <div>
                    <h4>Axios GET method with local json data!</h4>
                    {this.state.concerts.map(function(concert) {
                        return (
                            <div key={concert.id} className="details">
                                <span>
                                    <label>Name : </label>
                                    {concert.name}
                                    <label> Age :</label>
                                    {concert.age}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )
    
        }
    
}

export default Details;
