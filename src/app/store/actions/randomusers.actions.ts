import {Action, createAction} from "@ngrx/store";
import {RandomusersInterface} from "../../models/randomusers.interface";

export const SAVE_RANDOM_USER = createAction('[RandomUser] Save random user');
export const LOAD_USER_DATA = createAction('[RandomUser] Load user data');

// export class SaveRandomUser implements Action {
//   readonly type = SAVE_RANDOM_USER;
//   constructor(public payload :RandomusersInterface) {
//   }
// }

// export type  randomusersActions = SaveRandomUser;
