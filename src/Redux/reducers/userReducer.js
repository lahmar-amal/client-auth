import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../constants";

const initialState = {
  user: {},
  isAuth: false,
  isLoad: false,
  isError: false,
};
//payload of register
// {
//     "msg": "user created successfully",
//     "newUser": {
//       "email": "wael1234@gmail.com",
//       "password": "$2b$10$CMBbezLb0CLUVuNCLOmRrutLmagG5E/4LxcfCILkVM9kh31mDDCYK",
//       "name": "wael",
//       "phone": 123555,
//       "_id": "631ca617a2f8cb6515ac0c66",
//       "__v": 0
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWNhNjE3YTJmOGNiNjUxNWFjMGM2NiIsIm5hbWUiOiJ3YWVsIiwiaWF0IjoxNjYyODIxOTExLCJleHAiOjE2NjI4NTc5MTF9.Ya2EJGTN9Hdyql-CNMUCAYGH-rc44Xs2xijmtuILlGE"
//   }

//login payload
// {
//     "msg": "user logged in successfully",
//     "findUser": {
//       "_id": "631c68b6fce2b0c32c182798",
//       "email": "wael@gmail.com",
//       "password": "$2b$10$xkE0wUTujfjwPrxuuSp2Hu.5uob.ROOU4PrIpiwkg6K2O8fxZTFaO",
//       "name": "wael",
//       "phone": 123555,
//       "__v": 0
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWM2OGI2ZmNlMmIwYzMyYzE4Mjc5OCIsIm5hbWUiOiJ3YWVsIiwiaWF0IjoxNjYyODIyMDUyLCJleHAiOjE2NjI4MjIwNjJ9.ayU7C0h8QqKqeWFIxerLKKoaixKpXP-DmU1h8eQR9YM"
//   }

//current payload
// {
//     "msg": "you are authorizd",
//     "user": {
//       "_id": "631c6a479d8d43132015fb5f",
//       "email": "wael123@gmail.com",
//       "password": "$2b$10$ZGP0r/0Q0eq0pTioXqdYbO2pzT0qdH0aUuGPBVrFvhNRTAksgzTjy",
//       "name": "wael",
//       "phone": 123555,
//       "__v": 0
//     }

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, isAuth: false, isLoad: true, isError: false };
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        user: payload.newUser,
        isAuth: true,
        isLoad: false,
        isError: false,
      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        user: payload.findUser,
        isAuth: true,
        isLoad: false,
        isError: false,
      };
    case CURRENT_USER:
      return {
        user: payload.user,
        isAuth: true,
        isLoad: false,
        isError: false,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { user: {}, isAuth: false, isLoad: false, isError: false };
    case FAIL_USER:
      return { ...state, isAuth: false, isLoad: false, isError: true };
    default:
      return state;
  }
};
export default userReducer;
