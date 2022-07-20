const GameBoard = () => {
    return (
        <div className="container">
            <img
                onClick={(container) => {
                    const boxCoord = container.target.getBoundingClientRect();
                    let x = Math.round(container.clientX - boxCoord.left);
                    let y = Math.round(container.clientY - boxCoord.top);
                    console.log(`(${x}, ${y})`);
                }}
                className="gameboard-img"
                src="/img/gameboard-1.jpg"
                alt=""
            />
        </div>
    );
};

export default GameBoard;
