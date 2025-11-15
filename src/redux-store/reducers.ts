import { combineReducers } from "@reduxjs/toolkit";
import formBuilderReducer from "./slices/formBuilder.slice";
import formsReducer from "./slices/forms.slice";

const rootReducer = combineReducers({
  forms: formsReducer,
  formBuilder: formBuilderReducer,
});

export default rootReducer;
