export const initialState = {
  positions: [],
  startPosition: {}
};

export function reducer(state, action) {
  switch(action.type) {
    case "addPosition":
      return {
        ...state,
        positions: [...state.positions, action.payload]
      }
    case "delPostion":
      return {
        ...state,
        positions: state.positions.filter(el => el.id !== action.payload)
      }
    case "addStartPosition":
      const data = state.positions.slice().find(el => el.id === action.payload);
      return {
        ...state,
        startPosition: data
      }
    case "delStartPosition":
      return {
        ...state,
        startPosition: initialState.startPosition
      }
    default:
      throw new Error();
  }
}