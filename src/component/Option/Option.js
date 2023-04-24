import React, { useState } from 'react';

export const Option = ({ state, dispatch }) => {
    const { positions, startPosition } = state;
    const [option, setOption] = useState(startPosition?.id );

    const handleOptionChange = (e) => {
        const id = e.target.value;
        
        setOption(e.target.value);
        dispatch({type: 'addStartPosition', payload: id});
    };

    const optionsResult = positions.map(({id, x, y}) => {
        return <option key={id} value={id}>({`${x}, ${y}`})</option>;
    });

    return (
        <section className='w-96 block mx-auto mt-10'>
            <select value={option} onChange={handleOptionChange} className='w-96 m-1 p-2 text-center text-2xl bg-green rounded-sm flex flex-row justify-center content-center cursor-pointer'>
                <option value=''>{'<Wybierz>'}</option>
                {optionsResult}
            </select>
        </section>
    );
}