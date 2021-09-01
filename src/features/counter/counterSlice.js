const initialState = {
  items: [],
};

export function incrementCount() {
  return { type: "count/increment" };
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "count/increment":
      return {
        ...state,
        items: state.items.concat(state.items.length + 1),
      };
    default:
      return state;
  }
}

export default counterReducer;
