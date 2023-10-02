import { useGlobalContext } from "./Context/Context"

const Pagination = () => {
  const {page, nbPages, getPrevPage, getNextPage} = useGlobalContext();
  return (
    <> 
      <div className="pagination-btn">
        <button onClick={getPrevPage}>PRE</button>
        <p>{page +1} of {nbPages}</p>
        <button onClick={getNextPage}>NEXT</button>
      </div>
    </>
  )
}

export default Pagination