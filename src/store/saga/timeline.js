import { all, takeLatest, call, put } from "redux-saga/effects";

import {
  SET_STATUS_TIMELINE_LIST,
  SET_TIMELINE_LIST_DATA,
  FETCH_TIMELINE_DATA,
  CREATE_NEW_ONE,
  ADD_NEW_TIMELINE,
} from "../actions/timelines";

import {
  getTimelineLists,
  addNewTimlineItem,
} from "../../service/moc/timeline";

function* fetchTimelineData({ payload }) {
  yield put({
    type: SET_TIMELINE_LIST_DATA,
    payload: { loading: true },
  });

  const { data, error } = yield call(getTimelineLists, payload);

  if (error) {
    yield put({
      type: SET_STATUS_TIMELINE_LIST,
      payload: { loading: false },
    });
  } else {
    yield put({
      type: SET_TIMELINE_LIST_DATA,
      payload: { loading: false, data },
    });
  }
}

function* createNewTimeline({ payload }) {
  yield put({
    type: ADD_NEW_TIMELINE,
    payload: { loading: false, newData: payload.data },
  });

  yield call(addNewTimlineItem, payload);
}

export function* root() {
  yield all([yield takeLatest(FETCH_TIMELINE_DATA, fetchTimelineData)]);
  yield all([yield takeLatest(CREATE_NEW_ONE, createNewTimeline)]);
}
