import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';

class Home extends Component {
  // componentDidMount() {
  //   this.props.getCharacters();
  // }

  render() {
    return (
      <Fragment>
        <SearchBar onChange={name => this.props.getCharacters(name)} />
        <CharacterList />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.Characters
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: name => dispatch({ type: 'CHARACTER_FETCH_REQUESTED', payload: { name: name } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
