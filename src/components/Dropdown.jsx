const Dropdown = ({ display, checkMatch, nameArray }) => {
    function fillDropdown() {
        return nameArray.map((name, index) => {
            return (
                <div
                    onClick={(e) => {
                        const match = checkMatch(e.target.textContent);
                        if (match) {
                            document.querySelectorAll(".character-menu-item")[
                                index
                            ].style.opacity = ".3";
                            e.target.style.pointerEvents = "none";
                        }
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
