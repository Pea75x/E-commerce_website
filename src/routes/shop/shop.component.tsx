import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.tsx';
import Category from '../category/category.tsx';
import { fetchCategoriesStart } from '../../store/categories/category.action.ts';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};
export default Shop;
