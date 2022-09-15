import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview/category-preview';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div>
      <button onclick='send'>hello</button>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};
export default CategoriesPreview;
