const CharacterMenu = ({ imgArray }) => {
    function fillMenu() {
        return imgArray.map((item) => {
            return (
                <div className="character-menu-item row">
                    <img src={item.imgSrc} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            );
        });
    }
    return <div className="character-menu-container">{fillMenu()}</div>;
};
export default CharacterMenu;
