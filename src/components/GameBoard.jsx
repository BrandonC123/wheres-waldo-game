import { useEffect, useState } from "react";

const GameBoard = ({ index, toggleDropdown }) => {
    return (
        <div className="container">
            <img
                onClick={(event) => {
                    toggleDropdown(event.clientX, event.clientY);
                    const boxCoord = event.target.getBoundingClientRect();
                    let x = Math.round(event.clientX - boxCoord.left);
                    let y = Math.round(event.clientY - boxCoord.top);
                    // console.log(`(${x}, ${y})`);
                }}
                className="gameboard-img"
                src="/img/gameboard-1.jpg"
                alt=""
            />
        </div>
    );
};

export default GameBoard;
