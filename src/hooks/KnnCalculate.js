import _uniqueId from 'lodash/uniqueId';

const CostCalculate = (point, currentPoint) => (
    Math.sqrt(
        Math.pow(point.x - currentPoint.x, 2)
        +
        Math.pow(point.y - currentPoint.y, 2)
    )
);

const CostTable = ( positions, currentPoint ) => (
    positions.map(point => CostCalculate(point, currentPoint))
);
  
const FindMinValue = (positions, costTable) => {
    let minValue = costTable[0], minValuePosition = positions[0];

    for(let j=0; j<costTable.length; j++){
        if(minValue > costTable[j]){
            minValue = costTable[j];
            minValuePosition = positions[j];
        }
    }

    return {
        minValue,
        minValuePosition
    }
}

export const KnnCalculate = ( positions, startPosition ) => {
    const resultPoints = [startPosition];
    let cost = 0.00;
  
    positions = positions.filter(point => {
      return point.id !== startPosition.id
    });
  
    while(positions.length !== 0){
      const costTable = CostTable(positions, resultPoints[resultPoints.length - 1]);
  
      const { minValue, minValuePosition } = FindMinValue(positions, costTable);
    
      cost = cost + minValue;
      resultPoints.push(minValuePosition);
    
      positions = positions.filter(point => {
        return point.id !== minValuePosition.id
      });
    }

    cost = cost +  CostCalculate(startPosition, resultPoints[resultPoints.length - 1]);
  
    resultPoints.push({
        id: _uniqueId(),
        x: startPosition.x,
        y: startPosition.y
      });

    return {
        cost,
        resultPoints
    };
}