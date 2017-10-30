import React, { Component } from 'react';
import  * as BooksApi from './utils/BooksAPI'
import BooksDetail from './BooksDetail'


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
      <h1 align = 'center'>Books App</h1>
      <BooksDetail
  books = {this.state.books}
 />

      </div>
    );
  }
}

export default App;
