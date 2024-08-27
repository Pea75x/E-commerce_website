import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.tsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.jsx';

import { selectIsCartOpen } from '../../store/cart/cart.selector.ts';
import { selectCurrentUser } from '../../store/user/user.selector.ts';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
// import { signOutUser } from '../../utils/firebase/firebase.utils';
import { signOutStart } from '../../store/user/user.action.ts';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './navigation.styles.tsx';
import React from 'react';

function Nav() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
}

export default Nav;
