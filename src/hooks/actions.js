import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { usersActions } from "../store/api/users.slice";

const actions = {
  ...usersActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
