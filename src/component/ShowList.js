import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import '../style/ShowList.css'

const ShowList = props => {
    const {points, RemoveFromPoints} = props
  
    if(points.length <= 0) return false
  
    return (
      <>
        <ListGroup>
          {points.map(point => <ListGroup.Item className="text-center" key={point.id}>Punkt: ({point.x}, {point.y}) <Button variant="outline-danger" onClick={RemoveFromPoints.bind(this, point.id)}>Usuń</Button></ListGroup.Item>)}
        </ListGroup>
      </>
    )
}

export default ShowList