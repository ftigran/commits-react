import {
  EXAMPLE,
} from "./actions";

const initialState = {
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE:
      console.log("userLog");
      return { ...state, isLogged: action.payload };
  }

  return state;
};
