
import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer/CartContainer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(700)

  const handleDeleteProduct = (id) => {
    const currentProduct = products.find(product => product.id === id)
    const newCartProduct = products.filter(product => product.id !== id);
    setProducts(newCartProduct);
    setPrice(price - parseFloat(currentProduct.price))
  }

  const handleBuyButton = (product) => {
    const findProduct = products.find(p => p.id === product.id)
    if (!findProduct) {
      const newProducts = [...products, product]
      setProducts(newProducts);
      // handleAddPrice(parseInt(product.price))
      setPrice(parseFloat(product.price) + price)
    }
    else {
      alert('This Product Already Exist')
    }
  }

  return (
    <>
      <Header products={products} price={price}></Header>
      <div className='flex gap-4 max-w-7xl mx-auto mt-9'>
        <Products handleBuyButton={handleBuyButton}></Products>
        <CartContainer
          handleDeleteProduct={handleDeleteProduct}
          products={products}></CartContainer>
      </div>
    </>
  )
}

export default App
