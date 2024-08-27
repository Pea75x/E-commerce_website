import { useSelector } from 'react-redux';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems
} from './cart-dropdown.styles.jsx';
import Button from '../button/button.component.tsx';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../store/cart/cart.selector.ts';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
