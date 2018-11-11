// @flow

type ActionType = {
  type: string,
  payload: ?Object,
};

export type StateType = {
  index: number,
};

const initialState = {
  index: 0,
};

export default function reducer(state: StateType = initialState, action: ActionType): StateType {
  return state;
}
