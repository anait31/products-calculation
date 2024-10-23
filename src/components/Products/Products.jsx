import { useState, useEffect } from "react";
import Product from "../Product/Product";
const Products = ({handleBuyButton}) => {
    const [products, setProucts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProucts(data))
    }, [])
    return (
        <div className="w-2/3">
            <h2 className="text-4xl font-semibold mb-5">Products: {products.length}</h2>
            <div className="grid gap-4 grid-cols-3">
                {
                    products.map((product, idx) => <Product 
                    key={idx} 
                    handleBuyButton={handleBuyButton}
                    product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;