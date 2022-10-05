import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading
} from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview/category-preview';
import Spinner from '../../components/spinner/spinner.components';

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
