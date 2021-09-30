import React, { Component } from 'react';
import MoviesList from './componets/MoviesList';

class App extends Component {
  render() {
    const mobiles = [
      {
        id: 1,
        name: "Oppo"
      },
      {
        id: 2,
        name: "Samsung"
      },
      {
        id: 3,
        name: "Huawei"
      }
    ];

    return (
      <div>
        <MoviesList mobiles={mobiles} />
      </div>
    );
  }
}

export default App;