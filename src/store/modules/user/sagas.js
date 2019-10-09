import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "./../../../services/api";

import { toast } from "react-toastify";

import { updateProfileSuccess, updateProfileFailure } from "./../user/actions";

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      {
        name,
        email,
        avatar_id
      },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, "users", profile);

    yield put(updateProfileSuccess(response.data));
    toast.success("Perfil atualizado com sucesso!.");
  } catch (error) {
    toast.error(error.message);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
