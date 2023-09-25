import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(window?.localStorage)
}