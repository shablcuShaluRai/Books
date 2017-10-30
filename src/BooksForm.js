import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { Link } from 'react-router-dom'


export default class BooksForm extends Component{

  handleSubmit =(e)=>{
    e.preventDefault()
      const values = serializeForm(e.target, { hash: true })
      if (this.props.oncreateBookForm)
      this.props.oncreateBookForm(values)

  }
  render(){
    return(

      <div className = "form-style">
      <h1>Books Detail Form </h1>
      <form onSubmit={this.handleSubmit} className='create-contact-form'>
      <div className='create-contact-details'>
      <input type='text' name='name' placeholder='Name'/>
      <input type='text' name='author' placeholder='Author'/>
      <input type='number' name='price' placeholder='Price'/>
      <button className='link'>Add Book</button>
      <button>
      <Link className= 'link' to='/detail'>Detail</Link>
      </button>
      </div>
      </form>
      </div>
    )
  }
}
