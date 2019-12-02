import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const charactersListItem = props => (
  <div data-testid="characterlistitem-container">
    {props.character && (
      <div>
        <h1>{props.character.name}</h1>
        <img
          src={`${props.character.thumbnail.path}.${props.character.thumbnail.extension}`}
          alt=""
        />
        <p>{props.character.description}</p>
        <Link to="/details">
          <Button onClick={() => props.select(props.character)}>Details</Button>
        </Link>
      </div>
    )}
  </div>
);

export default charactersListItem;
