import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading
} from '../../store/categories/category.selector.ts';
import CategoryPreview from '../../components/category-preview/category-preview.tsx';
import Spinner from '../../components/spinner/spinner.components.tsx';
import React from 'react';

const CategoriesPreview = () => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </div>
  );
};
export default CategoriesPreview;
