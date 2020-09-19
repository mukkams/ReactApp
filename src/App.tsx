import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/WeatherForecast").then((response) => {
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
          <Header.Content>Weather Report</Header.Content>P
        </Header>
        <List>
          {this.state.values.map((item: any) => (
            <List.Item key={item.date}>
              {item.temperatureC} - {item.summary}
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
