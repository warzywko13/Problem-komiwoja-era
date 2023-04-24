import React from "react";

import { ListItem } from "./ListItem/ListItem";

export const List = ({ state, dispatch }) => {
  const { positions, startPosition } = state;
  const positionsLength = Object.keys(positions).length > 0 ? 1 : 0;

  const listResult = positions.map((point) => {
    return <ListItem key={point.id} startPosition={startPosition} point={point} dispatch={dispatch} />;
  });


  return positionsLength > 0 ? (
      <ul className="w-96 block mx-auto mt-10">
        {listResult}
      </ul>
  ) : (
    null
  );
}