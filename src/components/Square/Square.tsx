import React, {useState} from "react";
import './Square.css';

const Square = ({val, onClick}: { val: string, onClick: any}) => {
    return (
        <button className="square" onClick={() => onClick()}>
            {val}
        </button>
    );
}

export default Square;
