import React from 'react';
import { connect } from 'react-redux';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const CharacterList = props => (
  <div data-testid="characterlist-container">
    {props.characters.data.map(character => {
      return (
        <CharacterListItem character={character} select={props.selectCharacter}></CharacterListItem>
      );
    })}
  </div>
);

function mapStateToProps(state) {
  return {
    characters: state.Characters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectCharacter: item => dispatch({ type: 'SELECT_CHARACTER', character: item })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
