import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div>
            <h1 className="total-head">
              Order Total:
              <span className="totalAmount">{` RS ${totalAmount}/-`}</span>
            </h1>
            <p className="cart-para">{cartList.length} Items in cart</p>
            <button className="Checkout-button" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
