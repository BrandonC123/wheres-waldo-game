const Dropdown = ({ display }) => {
    return (
        display && (
            <div className="dropdown">
                <div className="dropdown-item">
                    <p>Character 1</p>
                </div>
                <div className="dropdown-item">
                    <p>Character 2</p>
                </div>
                <div className="dropdown-item">
                    <p>Character 3</p>
                </div>
            </div>
        )
    );
};

export default Dropdown;
