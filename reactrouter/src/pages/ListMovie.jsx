/*
Assignment:
1. Create a component called MovieList that receives an array of movies.
2. Each movie should have title and year.
3. Display them in a list format: "Title (Year)".
4. Add a 'rating' property to each movie and display it after the year 
in the format: "Title (Year) - Rating: X".
*/

export default function ListMovie(props) {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {props.movies.map((movie, index) => (
          <li key={index}>
            {movie.title} ({movie.year}) - Rating: {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}
