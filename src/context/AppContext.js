import { createContext, useReducer } from "react";
import appReducer from "./appReducer";
import { v4 as uuid } from "uuid";

const initialState = {
  savedQueries: [],
  tabs: [
    {
      name: "New Query",
      queryId: uuid(),
      code: "Select * from table",
      outputDetails: [],
      modal: false,
    },
  ],
  activeTab: null,
};

export const AppContext = createContext(initialState);
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const toggleModalVal = () => {
    const type = state.modal;
    dispatch({
      type: "toggleModal",
      payload: !type,
    })
  }
  const saveQuery = (query) => {
    dispatch({
      type: "changeSavedQuery",
      payload: query,
    });
  };

  const updateActiveTab = (updateTab) => {
    dispatch({
      type: "changeActiveState",
      payload: updateTab,
    });
  };

  const addTab = (tab) => {
    const newtab = state.tabs;
    newtab.push(tab);
    dispatch({
      type: "changeActiveState",
      payload: tab,
    });
    dispatch({ type: "AddingNewTab", payload: newtab });
  };

  const updateTab = (tab) => {
    const newtab = state.tabs.map((c) => {
      if (c.queryId === state.activeTab.queryId) {
        console.log("inside map", c);
        return tab;
      } else {
        return c;
      }
    });
    dispatch({
      type: "changeActiveState",
      payload: tab,
    });
    dispatch({ type: "ChangingCodeValue", payload: newtab });
  };

  const deleteTab = (queryId) => {
    const currqueryId = queryId;
    if (state.activeTab.queryId !== currqueryId) {
      const tabsAfterDeletion = state.tabs.filter((tab) => {
        return tab.queryId !== currqueryId;
      });
      dispatch({ type: "ChangingCodeValue", payload: tabsAfterDeletion });
    } else {
      if (state.tabs.length > 1) {
        let index = 0;
        for (let i = 0; i < state.tabs.length; i++) {
          if (state.tabs[i].queryId === currqueryId) {
            if (i === 0) {
              index = 0;
            } else {
              index = i - 1;
            }
          }
        }
        const tabsAfterDeletion = state.tabs.filter((tab) => {
          return tab.queryId !== currqueryId;
        });
        dispatch({ type: "ChangingCodeValue", payload: tabsAfterDeletion });
        dispatch({
          type: "changeActiveState",
          payload: tabsAfterDeletion[index],
        });
      } else {
        const customTab = [{
          name: "New Query",
          queryId: uuid(),
          code: "Select * from table",
          outputDetails: [],
        }];
        dispatch({ type: "ChangingCodeValue", payload: customTab });
        dispatch({ type: "changeActiveState", payload: customTab[0] });
      }
    }
  };

  const value = {
    tabs: state.tabs,
    activeTab: state.activeTab,
    savedQueries: state.savedQueries,
    addTab,
    updateActiveTab,
    updateTab,
    deleteTab,
    modal: state.modal,
    saveQuery,
    toggleModalVal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};