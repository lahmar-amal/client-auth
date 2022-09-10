import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "./constants";
import axios from "axios";
// register
export const register = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let res = await axios.post("http://localhost:5500/api/user/register", user);
    dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};

// login
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let res = await axios.post("http://localhost:5500/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};
// current
export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let res = await axios.get("http://localhost:5500/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};

export const logout = () => {
  return { type: LOGOUT_USER };
};
