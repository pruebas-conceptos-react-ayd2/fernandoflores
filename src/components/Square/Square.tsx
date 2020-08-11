import React from "react";
import './Square.css';

const Square = ({value}: { value: number }) => (
    <button className="square" onClick={() => alert('click')}>
        {value}
    </button>
);

export default Square;
