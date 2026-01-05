import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function SearchResults() {
  const { movies, loading } = useSelector((state) => state.search);

  if (loading) {
    return (
      <p className="text-white text-center mt-10 text-lg">
        Searching...
      </p>
    );
  }

  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 mt-6 pb-24">
      <h2 className="text-white text-xl font-bold mb-4">
        Search Results
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
