import { WatchedMovie } from "./WatchedMovie";

export function WatchedMoviesList({ watched, onDeleteWached }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWached={onDeleteWached}
        />
      ))}
    </ul>
  );
}
