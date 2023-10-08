const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "toggleModal":
      return{
        ...state,
        modal: payload,
      }
    case "AddingNewTab":
      return {
        ...state,
        tabs: payload,
      };
    case "ChangingCodeValue":
      return {
        ...state,
        tabs: payload,
      };
    case "changeActiveState":
      return {
        ...state,
        activeTab: payload,
      };
    case "changeSavedQuery":
      return {
        ...state,
        savedQueries: payload,
      }

    default:
      return state;
  }
};

export default appReducer;
