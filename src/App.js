import React from 'react'
import _uniqueId from 'lodash/uniqueId'
import InsertForm from './component/InsertForm'
import ShowList from './component/ShowList'
import SelectList from './component/SelectList'
import Knn from './component/Knn'
import './style/App.css'

class App extends React.Component {
  state = {
    select: "-1",
    x: '',
    y: '',
    cost: 0,
    points: [],
    startPosition: {},
    knnPoints: []
  }

  SetStartPosition = id => {
    const startPosition = this.state.points.filter(points => {
      return points.id === id
    })

    this.setState({startPosition})
  }

  HandleForm = e => {
    const {name, value} = e.target
    this.setState({[name]: value})

    if(name === 'select' && value !== "-1"){
      this.SetStartPosition(value)
    }
  }

  AddToPoints = () => {
    if(this.state.x === '' || this.state.y === ''){
      alert('Proszę o uzupełnienie formularza.')
      return false
    }

    if(isNaN(this.state.x) || isNaN(this.state.y)){
      alert('Proszę o uzupełnienie formularza liczbami.')
      return false
    }

    const newPoints = Object.freeze({
      id: _uniqueId(),
      x: this.state.x,
      y: this.state.y
    })

    this.setState({
      points: [...this.state.points, newPoints],
      x: '',
      y: ''
    })
  }

  RemoveFromPoints = id => {
    const points = this.state.points.filter(points => {
      return points.id !== id
    })

    this.setState({points})

    if(points.length < 3){
      this.setState({
        select: "-1",
        startPosition: {}
      })
    }
  }

  render() {
    return (
      <React.StrictMode>
        <InsertForm 
          HandleForm={this.HandleForm} 
          AddToPoints={this.AddToPoints}
          x={this.state.x}
          y={this.state.y}
        />
        <SelectList 
          points={this.state.points} 
          HandleForm={this.HandleForm} 
          select={this.state.select}
        />
        <ShowList 
          points={this.state.points} 
          RemoveFromPoints={this.RemoveFromPoints}
        />
        <Knn 
          select={this.state.select} 
          points={this.state.points} 
          startPosition={this.state.startPosition} 
        />
      </React.StrictMode>
    )
  }
}

export default App;
