import { all, call } from 'typed-redux-saga/macro';
import { categoriesSaga } from './categories/category.saga.ts';
import { userSagas } from './user/user.saga.ts';

// the * is a generator function
export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
