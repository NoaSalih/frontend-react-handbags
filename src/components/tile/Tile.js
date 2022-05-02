function Tile({image, tileTitle, tileText}) {
    return (<>
        <img src={image} alt=""/>
        <h2>{tileTitle}</h2>
        <p>{tileText}</p>
    </>)
}

export default Tile;