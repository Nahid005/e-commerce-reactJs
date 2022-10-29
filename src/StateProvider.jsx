import React, {createContext,  useContext, useReducer} from 'react'

export const StateContext = createContext()
export const StateProvider = ({reducer , initialValue, children}) => {
    return (
     <StateContext.Provider value={useReducer(reducer, initialValue)}>
            {children}
        </StateContext.Provider>
    )}
export const useStateValue = () => useContext(StateContext)
