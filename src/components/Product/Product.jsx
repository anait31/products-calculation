
const Product = ({ product, handleBuyButton }) => {
    const {name, location, price} = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{location}</p>
                    <div className="card-actions">
                        <button onClick={() => handleBuyButton(product)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;