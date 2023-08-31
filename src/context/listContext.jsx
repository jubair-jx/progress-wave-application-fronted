import { createContext, useReducer } from "react";
import listReducer from "../reducers/listReducer";
// import boardReducer from "../reducers/boardReducers"

export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [lists, dispatchListAction] = useReducer(listReducer, []);
  return (
    <ListContext.Provider value={{ lists, dispatchListAction }}>
      {children}
    </ListContext.Provider>
  );
};
export default ListProvider;
