
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import Carts from './Components/Carts/Carts';

function App() {

  const [title, setTitle] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleAddToCart = (data) => {
    let total = data.credit_hour;
    let totalPrice = data.price;
    const isExist = title.find(item => item.id == data.id)
    if (isExist) {
      return alert('Already Exist here')
    }
    else {

      title.forEach(item => {
        total = total + item.credit_hour;
        totalPrice = totalPrice + item.price
      })

      const remaining = 20 - total;
      if (total > 20) {
        return (`<div className="alert alert-success">
                          <span>Message sent successfully.</span>
                      </div>`)
      }
      else {
        setCredit(total)
        setRemaining(remaining)
        setTotalPrice(totalPrice)

        const newTitle = [...title, data];
        setTitle(newTitle)

      }


    }
  }


  return (
    <div className='mx-3'>

      <Header></Header>
      <div className='flex gap-5 justify-between w-full'>
        <Cards
          handleAddToCart={handleAddToCart}
        ></Cards>
        <Carts
          title={title}
          credit={credit}
          remaining={remaining}
          totalPrice={totalPrice}></Carts>
      </div>
    </div>
  )
}

export default App
