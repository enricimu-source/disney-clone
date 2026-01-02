import Header from "../Components/Header";
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import GenreMoviesList from "../Components/GenreMoviesList";
import SearchResults from "../Components/searchResults";
import { useSelector } from "react-redux";

function Home() {
  const searchMovies = useSelector((state) => state.search.movies);

  return (
    <div className=" pt-[70px] bg-[#0F1014] min-h-screen text-white">
      <Header />

      {searchMovies.length > 0 ? (
        <SearchResults />
      ) : (
        <>
          <Slider />
          <ProductionHouse />
          <GenreMoviesList />
        </>
      )}
    </div>
  );
}

export default Home;
