import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

const Field = ({ component, ...props }) => <input {...props} />;

class SearchBar extends Component {
  state = {
    name: ''
  };

  render() {
    return (
      <div data-testid="searchbar-container">
        <Field
          name="searchform"
          onKeyDown={() => this.props.onChange(this.state.name)}
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
          data-testid="SearchBar"
        />
      </div>
    );
  }
}

export default SearchBar;
