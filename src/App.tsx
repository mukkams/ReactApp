import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Header, Icon, List, Card} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      this.setState({
        values: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="cloud" />
          <Header.Content>User Report</Header.Content>
        </Header>
        <Card.Group>
          {this.state.values.map((item: any) => (
            <Card>
            <Card.Content>
              <Card.Header content={item.firstName}  />
              <Card.Meta content={item.lastName} />
              <Card.Description content='Team - Loan admin.' />
            </Card.Content>
          </Card>
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default App;
