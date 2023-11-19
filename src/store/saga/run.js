import { all } from "redux-saga/effects";

import { root as timeline } from "./timeline";

function* root() {
  yield all([timeline()]);
}

export default root;
