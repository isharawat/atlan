const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
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
    case "toggleModal":
      return{
        ...state,
        modal: payload,
    }
    default:
      return state;
  }
};

export default appReducer;
