import { useGlobalContext } from "./Context/Context"

const Search = () => {
  const {query, SearchPost} = useGlobalContext();
  return (
    <> 
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input 
          type="text" 
          placeholder="Search Here..."
          value={query}
          onChange={(e)=>SearchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  )
}

export default Search