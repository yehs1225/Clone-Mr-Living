import React,{createContext,useContext,useReducer} from 'react'

//Prepare the DataLayer
export const StateContext = createContext();//share  “global” data for react component tree

//Wrap our app and provide the Data layer
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//Pull infos from teh Data layer
export const useStateValue =()=>useContext(StateContext);