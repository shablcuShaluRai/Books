import React, { Component } from 'react';
import  * as BooksApi from './utils/BooksAPI'
import BooksDetail from './BooksDetail'
import BooksForm from './BooksForm'
import { Route } from 'react-router-dom'


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

  createBookForm(book) {
     BooksApi.create(book).then(book => {
      this.setState(state => ({
          books: state.books.concat([ book ])
      }))
    })
  }

  render() {
    return (
      <div className="App">
      <h1 align = 'center'>Books App</h1>

      <Route exact path='/'render={({ history }) =>(
        <BooksForm   oncreateBookForm={(book) => {
            this.createBookForm(book)
            history.push('/detail')
          }}/>
      )}
        />

        <Route  path='/detail' render={() => (
          <BooksDetail
        books = {this.state.books}
        />
)}
/>

      </div>
    );
  }
}

export default App;
