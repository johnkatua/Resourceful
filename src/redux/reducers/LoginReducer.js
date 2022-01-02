// import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../types/Types";
// import { initState } from "../../auth/utils";

// export const loginReducer = (state = initState, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return {
//         ...state,
//         loading: true,
//       };
//     case LOGIN_SUCCESS:
//       console.log(action);
//       return {
//         ...state,
//         loading: false,
//         user: action.user,
//       };
//     case LOGIN_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.error,
//       };
//     default:
//       return state;
//   }
// };
