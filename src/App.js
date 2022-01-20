import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <div>{user.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
