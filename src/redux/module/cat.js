const CAHNGE_NAME = "cat/CHANGE_NAME";

const initial_state = { name: "펄이 고양이", age: 100 };

export const changeName = (name) => {
  return { type: CAHNGE_NAME, name };
};

export default function reducer(state = initial_state, action = {}) {
  switch (action.type) {
    case "cat/CHANGE_NAME": {
      return { ...state, name: action.name };
    }
    default:
      return state;
  }
}
