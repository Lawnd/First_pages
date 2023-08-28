import React from 'react';

const ButtonComponent = ({title, handleClick }) => {
    return (
        <button onClick={handleClick} >{title} </button>
    )
}

export default ButtonComponent