import React, { useState} from 'react';
import _uniqueId from 'lodash/uniqueId';

export const InsertForm = ({ dispatch }) => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  const handleSetX = e => setX(Number(e.target.value));
  const handleSetY = e => setY(Number(e.target.value));

  const handleAddPointsButton = () => {
    if(isNaN(x) || isNaN(y)) {
      alert('X i Y muszą być liczbami!');
      return;
    }

    if(x === '' || y === '') {
      alert('X i Y nie mogą być puste!');
      return;
    }

    dispatch({type: 'addPosition', payload: {id: _uniqueId(), x: x, y: y}});

    setX('');
    setY('');
  }

  return (
    <section>
      <div className='container md:w-3/4 xl:w-2/4 2xl:w-1/4 w-3/4 mx-auto'>
        <form className='flex flex-col'>
          <input 
            id='X'
            className='input' 
            type="number" 
            placeholder='Podaj X' 
            value={x} 
            onChange={handleSetX} 
          />

          <input 
            id='Y'
            className='input' 
            type="number" 
            placeholder='Podaj Y' 
            value={y} 
            onChange={handleSetY} 
          />
        
          <button 
            type="button" 
            className="button" 
            onClick={handleAddPointsButton}
          >
            Dodaj
          </button>
        </form>
      </div>
    </section>
  );
}
