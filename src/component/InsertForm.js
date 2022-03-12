import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import '../style/InsertForm.css'

const InsertForm = props => {
    const {HandleForm, AddToPoints, x, y} = props
  
    return (
      <>
        <h1 className="text-center text-success">Algorytm najbliższego sąsiada</h1>
        <div id="form">
          <Form.Group className="mb-3 text-center">
            {/* <input placeholder="Podaj X" name="x" value={x} type="text" onChange={HandleForm}/> */}
            <Form.Control type="text" placeholder="Podaj X" name="x" value={x} onChange={HandleForm} />
            <Form.Control type="text" placeholder="Podaj Y" name="y" value={y} onChange={HandleForm} />
          
            <Button variant="outline-success" onClick={AddToPoints} size="lg">Dodaj</Button>
          </Form.Group>
        </div>
      </>
    )
}

export default InsertForm