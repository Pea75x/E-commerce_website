import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

//? MEMOIZE - will only run if the categories value is different
// createSelector creates a memoize selector - takes 2 arguments - array of input selectors - and output selector
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// also memoized and wont run when categories value is same
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

// Memozing helps stop unnecessary re-rendering/ optimizes code
