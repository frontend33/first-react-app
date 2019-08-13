import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    searchText: ''
  }

  searchEvent = (e) => {
    const searchText = e.target.value
    this.setState ({searchText})
    this.props.onSearchChange(searchText)
  }
  render() {
    // const { searchEvent } = this.props
    return (
      <input
        onChange={this.searchEvent}
        autoComplete=""
        className="form-control search-input"
        value={this.state.searchText}
      // htmlFor="ывыв"
      />
    );
  }
}
