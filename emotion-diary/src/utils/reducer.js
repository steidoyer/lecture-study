export const reducer = (state, action) => {
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [...state, action.data];
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => item.id !== action.data.id);
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) => {
        item.id === action.data.id ? action.data : item;
      });
      break;
    }
    default:
      return state;
  }

  return nextState;
};
