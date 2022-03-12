import _uniqueId from 'lodash/uniqueId'
import Canvas from './Canvas'
import ListGroup from 'react-bootstrap/ListGroup'
import '../style/Knn.css'

const Knn = props => {
    const {select, points, startPosition} = props
    
    if(select === "-1") return false
    if(points.length <= 1) return false
  
    let points2 = points
    let currentPoint = startPosition[0]
    let usedPoints = []
    let cost = 0.00
  
    points2 = points2.filter(point => (point.x !== currentPoint.x && point.y !== currentPoint.y))
    usedPoints = usedPoints.concat(currentPoint)
  
    while(points2.length !== 0){
      //wyliczanie wszystkich kosztów
  
      const costTable = points2.map( point => Math.sqrt(Math.pow(point.x - currentPoint.x, 2) + Math.pow(point.y - currentPoint.y, 2)))
  
      //znalezienie id najmniejszego kosztu
      let min = costTable[0], id = points2[0]
      for(let j=0; j<costTable.length; j++){
        if(min > costTable[j]){
          min = costTable[j]
          id = points2[j]
        }
      }
  
      //dodanie najmniejszego kosztu do użytych 
      usedPoints = usedPoints.concat(id)
      currentPoint = id
      cost = cost + min
  
      //usuwanie z listy najmniejszego
      points2 = points2.filter(point => point.id !== id.id)
    }

    const newPoints = {
        id: _uniqueId(),
        x: startPosition[0].x,
        y: startPosition[0].y
    }

    cost = cost + Math.sqrt(Math.pow(newPoints.x - currentPoint.x, 2) + Math.pow(newPoints.y - currentPoint.y, 2))
    cost = Math.round(cost * 100) / 100
  
    usedPoints = usedPoints.concat(newPoints)
  
    return (
      <>
        <hr />
        <h2 className="text-center">Koszt: {cost}</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <ListGroup>
                {usedPoints.map(item => <ListGroup.Item key={item.id}>Punkt ({item.x}, {item.y})</ListGroup.Item>)}
              </ListGroup>
            </div>
            <div className="col">
              <Canvas points={usedPoints}/>
            </div>
          </div>
        </div>
      </>
    )
}

export default Knn