import React, { Component } from 'react'


export default class BooksDetail extends Component{
  render(){
    let { books }= this.props
    return(
      <table className='table table-bordered table-hover'>
      <thead>
       <tr>
       <th>Name</th>
       <th>Author</th>
       <th>Price</th>
       </tr>
       </thead>
      <tbody>
              {books.map(books =>
              <tr key={books.id}>
              <td>{books.author}</td>
              <td>{books.name} </td>
              <td>{books.price}</td>
              </tr>
              )}

      </tbody>
      </table>
    )
  }
}
