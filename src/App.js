import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component.tsx';
import Nav from './routes/navigation/navigation.component.tsx';
import Authentication from './routes/authentication/authentication.tsx';
import Shop from './routes/shop/shop.component.tsx';
import Checkout from './routes/checkout/checkout.tsx';
import { checkUserSession } from './store/user/user.action.ts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //? number 1 in flow
    dispatch(checkUserSession());
    // ? dont need this anymore now we have done redux-saga
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
