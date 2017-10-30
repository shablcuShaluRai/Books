import React, { Component } from 'react';
import  * as BooksApi from './utils/BooksAPI'


class App extends Component {
  state ={
    books:[]
  }

  componentDidMount() {
    BooksApi.getAll().then((books) => {
      this.setState({ books })
      console.log(books);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Books App</h1>

        {this.state.books.map(books =>
          <div key={books.id}>
          <ol>
        <p>{books.author}</p>
        <p>{books.name} </p>
        <p>{books.price}</p>
          </ol>
          </div>
        )}

      </div>
    );
  }
}

export default App;
