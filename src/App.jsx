function MovieCard(movie){
    return(
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.rating}</p>
            <p>{movie.genre}</p>
        </div>
    )
}   

function App() {
    const movies = [
        {title : "The Mentalist" , rating : "9.9" , genre : "Crime Thriller"},
        {title : "Breaking Bad" , rating : "9.9" , genre : "Synthetic Thriller"},
        {title : "ChottaBheem" , rating : "9.9" , genre : "Mass Cartoon Fight"}

    ]
  return (
    <div>
      <h1>🎬 Netflix Picks</h1>
   {
  movies.map((movie) => {
    return (
      <MovieCard title={movie} />
    )
  })
}
    </div>
  )
}


export default App