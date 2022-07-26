const Header = ({ setImgSrc, setGameBoardIndex, toggleLeaderboard }) => {
    return (
        <header className="header">
            <div className="header-container container row">
                <h1>Where's Waldo</h1>
                <div className="gameboard-link-container">
                    <a
                        onClick={() => {
                            setImgSrc("/img/gameboard-1.jpg");
                            setGameBoardIndex(1);
                        }}
                        href="#"
                        className="gameboard-link"
                    >
                        Gameboard 1
                    </a>
                    <a
                        onClick={() => {
                            setImgSrc("/img/gameboard-2.jpg");
                            setGameBoardIndex(2);
                        }}
                        href="#"
                        className="gameboard-link"
                    >
                        Gameboard 2
                    </a>
                </div>
                <a
                    onClick={() => {
                        toggleLeaderboard();
                    }}
                    href="#"
                    className="gameboard-link"
                >
                    Leaderboard
                </a>
            </div>
        </header>
    );
};

export default Header;
