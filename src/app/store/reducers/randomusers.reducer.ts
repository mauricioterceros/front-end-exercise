import { SAVE_RANDOM_USER, LOAD_USER_DATA } from "../actions/randomusers.actions";
import {RandomusersInterface} from "../../models/randomusers.interface";
import {createReducer, on} from "@ngrx/store";

export const initState:RandomusersInterface = {
  id: 0,
  uid: '',
  password: '',
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  avatar: '',
  gender: '',
  phone_number: '',
  social_insurance_number: '',
  date_of_birth: '',
  employment: '',
  address: '',
  credit_card: '',
  subscription: '',
};

export const randomUsersReducer = createReducer(
  initState,
  // on(SAVE_RANDOM_USER, (state))
);
