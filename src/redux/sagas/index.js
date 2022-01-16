import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./user";

export function* rootSaga() {
    yield all([
        watchUsersAsync()
    ])
}