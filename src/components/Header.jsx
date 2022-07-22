const Header = ({ setImgSrc, setGameBoardIndex }) => {
    return (
        <header className="header">
            <div className="header-container container row">
                <h1>Where's Waldo</h1>
                <div className="gameboard-option-container row">
                    <div className="gameboard-option">
                        <a
                            onClick={() => {
                                setImgSrc("/img/gameboard-1.jpg");
                                setGameBoardIndex(1);
                            }}
                            href="#"
                        >
                            Gameboard 1
                        </a>
                    </div>
                    <div className="gameboard-option">
                        <a
                            onClick={() => {
                                setImgSrc("/img/gameboard-2.jpg");
                                setGameBoardIndex(2);
                            }}
                            href="#"
                        >
                            Gameboard 2
                        </a>
                    </div>
                </div>
                <p>Leaderboard</p>
            </div>
        </header>
    );
};

export default Header;
