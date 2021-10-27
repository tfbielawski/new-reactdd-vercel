import React, { Component } from 'react'

class SearchForm extends Component {
  state = { 
    formData: {
      query: ''
    }
  }

  //Form change handler
  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}
    this.setState({ formData })
  }

  //Form submit handler
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSpellSearch(this.state.formData)
  }

  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="query"
            value={this.state.formData.query}
            onChange={this.handleChange}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
     );
  }
}
 
export default SearchForm;