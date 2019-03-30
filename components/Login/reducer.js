const initialState = {
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, user: action.user };
    }

    case 'LOGOUT': {
      return { ...state, user: null };
    }

    default: {
      return state;
    }
  }
}
