import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import '../style/InsertForm.css'

const InsertForm = props => {
    const {HandleForm, AddToPoints, HandleKeyDown, x, y} = props
  
    return (
      <>
        <h1 className="text-center text-success">Algorytm najbliższego sąsiada</h1>
        <div id="form" className=" col-xs-10 col-md-6 col-lg-6 col-xl-3 m-auto">
          <Form.Group className="mb-3 text-center">
              <Form.Control type="text" placeholder="Podaj X" name="x" value={x} onChange={HandleForm} />
              <Form.Control type="text" placeholder="Podaj Y" name="y" value={y} onChange={HandleForm} />
            <Button variant="outline-success" onClick={AddToPoints} onKeyPress={HandleKeyDown} size="lg">Dodaj</Button>
          </Form.Group>
        </div>
      </>
    )
}

export default InsertForm