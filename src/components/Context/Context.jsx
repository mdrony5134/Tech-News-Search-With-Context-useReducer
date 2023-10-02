/* eslint-disable react-hooks/exhaustive-deps */
// create context provider
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer";


let API = 'http://hn.algolia.com/api/v1/search?'



const initialState = {
    isLoading: true,
    query: '',
    page: 0,
    nbPages: 0,
    hits: [],
}


const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({children}) =>{
   

    const [state, dispatch] = useReducer(reducer, initialState)
  
const fetchApiData = async (url) =>{
    dispatch({type: 'SET_LOADING'})
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data)
        dispatch({type:'GET_STORIES',  
                  payload:{hits: data.hits},
                  nbPages: {nbPages: data.nbPages}
                })
                
    } catch (error) {
        console.log(error)
    }
}

// search data

const SearchPost = (searchValue) =>{
    dispatch({type: "SEARCH_QUERY", payload: searchValue})
}
// prev get-data  btn
const getPrevPage = () =>{
    dispatch({type: "PREV_PAGE"})
}

// NEXT PAGE FUNCTION BTN
const getNextPage = () =>{
    dispatch({type: "NEXT_PAGE"})
}


// remove post function

const removePost = (id) =>{
    dispatch({type: "Remove_POST", payload: id})
}

// call api for data
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    },[state.query, state.page])

   
    return(
        <AppContext.Provider value={{...state, SearchPost, removePost, getPrevPage, getNextPage}}>{children}</AppContext.Provider>
    )
}

//create custom hook
const useGlobalContext = () =>{
    return useContext(AppContext)
}

// eslint-disable-next-line react-refresh/only-export-components
export {AppContextProvider, AppContext, useGlobalContext}