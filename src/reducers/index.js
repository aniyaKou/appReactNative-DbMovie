// @flow
import { combineReducers } from 'redux';
import reducerSample from './reducer.sample';
import type { StateType as ReducerSampleStateType } from './reducer.sample';

type AppState = {
  reducerSample: ReducerSampleStateType,
};

const state: AppState = combineReducers({
  reducerSample,
});

export default state;
