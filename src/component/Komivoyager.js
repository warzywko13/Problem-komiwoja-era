import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducer/komivoyagerReducer';

import { InsertForm } from './InsertForm/InsertForm';
import { List } from './List/List';
import { Option } from './Option/Option';
import { Knn } from './Knn/Knn';

export const Komivoyager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {positions, startPosition} = state;

  const showHideOption = positions.length >= 3 ? <Option state={state} dispatch={dispatch} /> : null;
  const showHideKnn = !isNaN(startPosition?.x) && !isNaN(startPosition?.y) ? <Knn state={state} /> : null;

  return (
    <>
      <h1 className='text-center text-5xl font-bold m-5 text-green'>Algorytm najbliższego sąsiada</h1>
      <InsertForm dispatch={dispatch} />
      {showHideOption}
      
      <List state={state} dispatch={dispatch} />
      <hr className="h-px my-8" />
      {showHideKnn}
    </>
  );
}
