import { combineReducers } from "@reduxjs/toolkit";
import formBuilderReducer from "./slices/formBuilder.slice";

const rootReducer = combineReducers({
  formBuilder: formBuilderReducer,
});

export default rootReducer;
