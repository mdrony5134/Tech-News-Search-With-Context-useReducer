/* eslint-disable no-case-declarations */
const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_LOADING': 
        return{
            ...state, 
            isLoading: true
        }
        case 'GET_STORIES': 
        return {
            ...state, 
            isLoading: false,
             hits: action.payload.hits,
             nbPages: action.nbPages.nbPages,
        }
        case "Remove_POST": return{
            ...state,
            hits: state.hits.filter(({objectID})=> objectID !== action.payload)
        }
        case 'SEARCH_QUERY': 
        return{
            ...state, 
            query:action.payload
        }

        case 'PREV_PAGE': 
        let pageNumber = state.page - 1

            if(pageNumber <= 0){
                pageNumber = 0
            }
        return{
            ...state,
            page: pageNumber,
        }

        case 'NEXT_PAGE': 
        let pageNumInc = state.page + 1
        if(pageNumInc >= state.nbPages){
            pageNumInc = 0
        }
        return{
            ...state,
            page: pageNumInc,
        }

        case "default" : return state
        
    }
    // return state;
}
export default reducer