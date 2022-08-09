import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Nav from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in';

function Shop() {
  return <h1>Hellooooo</h1>;
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
