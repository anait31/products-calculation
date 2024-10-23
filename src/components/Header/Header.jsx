
const Header = ({products, price}) => {
    return (
        <div className="max-w-7xl mx-auto flex justify-between py-3">
            <h1 className="text-4xl font-bold">React Practice</h1>
            <nav>
                <ul className="flex space-x-4 text-2xl">
                    <li>Products</li>
                    <li>Cart {products.length}</li>
                    <li>Total: {price}$ </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;