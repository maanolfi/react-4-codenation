import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import CharacterService from '../../services/characters';

export function* fetchCharacter(action) {
  try {
    const data = yield call(CharacterService.getCharacters, action.payload);
    console.log(data);
    yield put({ type: 'RESULT', data: data });
  } catch (e) {
    yield put({ type: 'FAILED', message: e.message });
  }
}
