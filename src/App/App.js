import React, { Component } from 'react';
import { fetchDataFromServer } from '../lib/api';
import './App.css';

class App extends Component {
  state = { beers: [] };

  componentDidMount() {
    fetchDataFromServer().then(beers => this.setState({ beers: beers.data }));
  }

  render() {
    return (
      <div className="App">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ABV</th>
              <th>IBU</th>
            </tr>
          </thead>
          <tbody>
            {this.state.beers.map(beer => (
              <tr key={beer.id}>
                <td>{beer.name}</td>
                <td>{beer.abv}</td>
                <td>{beer.ibu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
