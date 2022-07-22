const Dropdown = ({ display, checkMatch, nameArray }) => {
    console.log(nameArray);
    function fillDropdown() {
        return nameArray.map((name) => {
            return (
                <div
                    onClick={(e) => {
                        checkMatch(e.target.textContent);
                        console.log(e.target.textContent);
                    }}
                    className="dropdown-item"
                >
                    {name}
                </div>
            );
        });
    }
    return display && <div className="dropdown">{fillDropdown()}</div>;
};

export default Dropdown;
