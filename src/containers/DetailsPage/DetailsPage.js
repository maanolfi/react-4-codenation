/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import Button from './../../components/Button/Button';

class DetailsPage extends Component {
  state = {};

  componentDidMount() {
    //use localStorage
  }

  componentWillUnmount() {
    //use localStorage newName for characters
  }

  render() {
    const { character } = this.props;
    return (
      <div>
        <h1>{character.name}</h1> <Button background="red">Editar</Button>
        <hr></hr>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
        <p>{character.description}</p>
        <h4>Series({character.series.items.length})</h4>
        <ul>Series</ul>
        {character.series.items.map(serie => {
          return <ul>{serie.name}</ul>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.Characters.selected
  };
};

export default connect(mapStateToProps)(DetailsPage);
