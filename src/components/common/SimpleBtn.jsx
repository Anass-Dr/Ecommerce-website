import React from 'react';

function SimpleBtn({ str, form, handleClick }) {
    if (form)
        return (
            <button onClick={handleClick} className='simple-btn submit-btn' type='submit'>
                {str}
            </button>
        );
    else return <button onClick={handleClick} className='simple-btn'>{str}</button>;
}

export default SimpleBtn;
