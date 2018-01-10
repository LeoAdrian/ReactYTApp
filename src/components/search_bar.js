import React, { Component } from 'react';


class Searchbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchterm:''
    }
  }

    onInputChange = (term) => {
      this.setState({
        searchterm: term
      })
      this.props.onSearchChange(term);
      console.log(this.state.searchterm)
    }

  render(){
    return (
      <div className='search-bar'>
          <input value = {this.state.searchterm} onChange = {event => this.onInputChange(event.target.value)} />
      </div>
  )
  }
}

export default Searchbar;
