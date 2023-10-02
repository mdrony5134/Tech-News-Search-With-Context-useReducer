import { useGlobalContext } from "./Context/Context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="stories-div">
        {hits.map((currentEle) => {
          const { title, url, author, objectID, num_comments } = currentEle;
          return (
            
              <div className="card" key={objectID}>
                <h2>{title}</h2>
               <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
               </p>

                <div className="card-button">
                  <a href={url} target="blank">
                    Read More
                  </a>
                  <a href='#' onClick={()=>removePost(objectID)}>Remove</a>
                </div>

              </div>
          
          );
        })}
      </div>
    </>
  );
};

export default Stories;
