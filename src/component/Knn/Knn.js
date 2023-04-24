import React from "react";
import { Canvas } from "./Canvas/Canvas";

import { KnnList } from './KnnList/KnnList';
import { KnnCalculate } from "../../hooks/KnnCalculate";

export const Knn = ({ state }) => {
  const { startPosition } = state;
  let { positions } = state;

  const { cost, resultPoints } = KnnCalculate(positions, startPosition);
    
  if(positions.length >= 3) {
    return (
      <>
        <h2 className="text-center text-3xl font-bold text-green">Koszt: {cost.toFixed(1)}</h2>
        <div className="mt-5 w-11/12 md:w-8/12 mx-auto grid grid-cols-1 gap-2 place-items-center xl:grid-cols-2 sm:mt-5">
            <KnnList resultPoints={resultPoints} />
            <Canvas className="mx-auto" points={resultPoints} startPoint={startPosition} />
        </div>
      </>
    );
  } else {
    return null;
  }
};