
const Cart = ({ products, handleDeleteProduct }) => {
    return (
        <div>
            {products.map((product, idx) => <div key={idx}>
                <ul className="flex space-x-4">
                    <li>{product.name}</li>
                    <li>{product.price}</li>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </ul>
            </div>)}
        </div>
    );
};

export default Cart;