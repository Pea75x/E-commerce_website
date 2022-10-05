import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './categories/catergory.saga';
import { userSagas } from './user/user.saga';

// the * is a generator function
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
