import Form from 'react-bootstrap/Form'
import '../style/SelectList.css'

const SelectList = props => {
    const {points, HandleForm, select} = props
  
    if(points.length <= 2) return false
  
    const List = points.map(point =>
      <option key={point.id} value={point.id}>({point.x}, {point.y})</option>
  )
  
    return (
      <div className="center">
        <Form.Select name="select" value={select} onChange={HandleForm} >
          <option key={-1} value={-1}>Wybierz</option>
          {List}
        </Form.Select> 
      </div>
    )
}

export default SelectList