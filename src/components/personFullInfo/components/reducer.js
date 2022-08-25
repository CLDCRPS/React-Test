const INITIAL_PERSON_STATE = {
  name: "",
  userName: "",
  email: "",
  street: "",
  city: "",
  zipCode: "",
  phone: "",
  website: "",
  comment: "",
};

export const INITIAL_STATE = {
  isLoading: false,
  person: INITIAL_PERSON_STATE,
  isDisabled: true,
};

export const ACTION_TYPES = {
  SET_IS_LOADING: "set is loading",
  SET_PERSON: "set person",
  CHANGE_PERSON_INPUT: "change person input",
  SET_IS_DISABLED: "set is disabled",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case ACTION_TYPES.SET_IS_DISABLED: {
      return {
        ...state,
        isDisabled: !state.isDisabled,
      };
    }
    case ACTION_TYPES.SET_PERSON: {
      const { payload } = action;

      return {
        ...state,
        // person: action.payload ?? INITIAL_PERSON_STATE, // or state.person
        person: {
          ...state.person,
          name: payload.name,
          userName: payload.username,
          email: payload.email,
          street: payload.address.street,
          city: payload.address.city,
          zipCode: payload.address.zipcode,
          phone: payload.phone,
          website: payload.website,
        },
      };
    }
    case ACTION_TYPES.CHANGE_PERSON_INPUT: {
      const { inputName, inputValue } = action.payload;
      console.log(inputName, "inputName");
      return {
        ...state,
        person: {
          ...state.person,
          [inputName]: inputValue,
        },
      };
    }
    default: {
      return state;
    }
  }
};
