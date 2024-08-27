import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import {
  selectCartCount,
  selectIsCartOpen
} from '../../store/cart/cart.selector.ts';
import { setIsCartOpen } from '../../store/cart/cart.action.ts';

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount
} from './cart-icon.styles.tsx';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
