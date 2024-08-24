import { takeLatest, all, call, put } from 'typed-redux-saga/macro';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.ts';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed
} from './category.action.ts';
import { CATEGORIES_ACTION_TYPES } from './category.types.ts';

export function* fetchCategoriesAsync() {
  // anywhere you have a function and you want to turn it into an effect you use the CALL keyword.
  // it did look like this before ---- getCategoriesAndDocuments(categories)
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
    // instead of this ------ dispatch(fetchCategoriesSuccess(categoriesArray));
    // put is the generator version of dispatch
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
