import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading
} from '../../store/categories/category.selector.ts';
import ProductCard from '../../components/product-card/product-card';
import Spinner from '../../components/spinner/spinner.components';

const Category = () => {
  console.log('render/ re-render category component');
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='category-container'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
