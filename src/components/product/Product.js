function Product({labelText, productImage, bagName, bagPrice}) {
    return (<>
        <article>
            <span>{labelText}</span>
            <img src={productImage} alt=""/>
            <p>{bagName}</p>
            <h4>{bagPrice}</h4>

        </article>
    </>)

}

export default Product;