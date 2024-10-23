
import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer/CartContainer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(700)

  // const handleAddPrice = (p) => {
  //   setPrice(price + p)
  // }
  // const handleDecreasePrice = (p) => {
  //   setPrice(price - p)
  // }

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
        <CartContainer></CartContainer>
      </div>
    </>
  )
}

export default App
