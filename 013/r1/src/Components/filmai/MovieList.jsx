function MovieList({filmai}){


  
    return (
    <div>
         {
             filmai.map(filmas => <p>{filmas.title}{filmas.popularity}</p>)
         }
    </div>
    )
}

export default MovieList;