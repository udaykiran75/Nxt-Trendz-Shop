import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import Payment from '../Payment'
import CartContext from '../../context/CartContext'

import './index.css'

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

            <Popup
              modal
              trigger={
                <button className="Checkout-button" type="button">
                  Checkout
                </button>
              }
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
