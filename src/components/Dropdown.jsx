const Dropdown = ({ display, checkMatch }) => {
    return (
        display && (
            <div className="dropdown">
                <div
                    onClick={() => {
                        checkMatch("Waldo");
                    }}
                    className="dropdown-item"
                >
                    Character 1
                </div>
                <div className="dropdown-item">Character 2</div>
                <div className="dropdown-item">Character 3</div>
            </div>
        )
    );
};

export default Dropdown;
