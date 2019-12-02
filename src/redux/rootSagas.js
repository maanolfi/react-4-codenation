/* Effects */
import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchCharacter } from './characters/sagas';

export default function* rootSagas() {
  yield takeLatest('CHARACTER_FETCH_REQUESTED', fetchCharacter);
}
