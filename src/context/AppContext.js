import { createContext, useReducer } from "react";
import appReducer from "./appReducer";
import { v4 as uuid } from "uuid";

const initialState = {
  savedQueries: [
    {
      name: "Saved Query 1",
      queryId: uuid(),
      code: "Select * from name where age > 20",
    },
    {
      name: "Saved Query 2",
      queryId: uuid(),
      code: "Select * from city",
    },
    {
      name: "Saved Query 3",
      queryId: uuid(),
      code: "Select * from country",
    },
  ],
  tabs: [
    {
      name: "New Query",
      queryId: uuid(),
      code: "Select * from table",
      outputDetails: [],
    },
  ],
  activeTab: null,
  modal: false,
  currDatabase: "Project1",
};

export const AppContext = createContext(initialState);
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const toggleModalVal = (type) => {
    dispatch({
      type: "toggleModal",
      payload: type,
    })
  }
  const saveQuery = (query) => {
    dispatch({
      type: "changeSavedQuery",
      payload: query,
    });
  };
  
  const resetClick = () => {
    const newtab = state.tabs.map((c) => {
      if (c.queryId === state.activeTab.queryId) {
        console.log("inside map", c);
        const currtab = {...c, code: "Select * from table"};
        return currtab;
      } else {
        return c;
      }
    });
    dispatch({ type: "ChangingCodeValue", payload: newtab });
  }

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
  const databaseChange = (value) => {
    dispatch({ type: "changeCurrDatabase", payload: value });
  };
  const value = {
    tabs: state.tabs,
    activeTab: state.activeTab,
    savedQueries: state.savedQueries,
    modal: state.modal,
    currDatabase: state.currDatabase,
    addTab,
    updateActiveTab,
    updateTab,
    deleteTab,
    saveQuery,
    toggleModalVal,
    resetClick,
    databaseChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
