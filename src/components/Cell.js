import React from 'react';

function Cell({ onCellClick, value }) {
    return (
        <td onClick={onCellClick}>{value}</td>
    );
}

export default Cell;