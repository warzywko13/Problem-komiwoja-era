import React from 'react';

export const ListItem = ({ startPosition, point, dispatch }) => {
    const {x, y, id} = point;

    const removeItem = () => {
        if(id === startPosition?.id){
            dispatch({type: 'delStartPosition'});
        }

        dispatch({type: 'delPostion', payload: id});
    };

    return (
        <li className='list flex flex-row justify-center content-center'>
            <p className='basis-2/4'>Punkt ({`${x}, ${y}`})</p>
            <button 
                className='p-1 mx-right rounded-md border text-green border-green hover:text-white hover:scale-105 duration-300'
                onClick={removeItem}>
                Usuń
            </button>
        </li>
    );
}
