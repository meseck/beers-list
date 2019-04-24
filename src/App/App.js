import React, { Component } from 'react';
import { fetchDataFromServer } from '../lib/api';
import './App.css';

class App extends Component {
  state = { currentPage: 1, numberOfPages: 0, beers: [] };

  componentDidMount() {
    fetchDataFromServer(this.state.currentPage).then(response =>
      this.setState({
        currentPage: response.currentPage,
        numberOfPages: response.numberOfPages,
        beers: response.data,
      })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleChangePage = direction => {
      if (prevState.currentPage === 1 && direction === -1) {
        return;
      } else if (prevState.currentPage === this.state.numberOfPages && direction === 1) {
        return;
      } else {
        this.setState({currentPage: prevState.currentPage += direction});
      }
    };

    if (this.state.currentPage !== prevState.currentPage) {
      fetchDataFromServer(this.state.currentPage).then(response =>
        this.setState({
          beers: response.data,
        })
      );
    }
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
                <td>{beer.nameDisplay}</td>
                <td>{beer.abv}</td>
                <td>{beer.ibu}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          {this.state.currentPage} of {this.state.numberOfPages} pages
        </p>
        <button onClick={() => this.handleChangePage(-1)}>Previous Page</button>
        <button onClick={() => this.handleChangePage(1)}>Next Page</button>
      </div>
    );
  }
}

export default App;
