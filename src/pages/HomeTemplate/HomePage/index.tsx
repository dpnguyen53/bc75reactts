import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovie } from "./slice";
import { AppDispatch, RootState } from "@/store";
import Movie from "./movie";
import Loader from "@/components/Loader";

export default function HomePage() {
  const dispatch: AppDispatch = useDispatch();
  const props = useSelector((state: RootState) => state.listMovieReducer);

  useEffect(() => {
    dispatch(fetchListMovie());
  }, []);

  const renderListMovie = () => {
    const { data } = props;
    if (data) {
      return data.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  if (props.loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto">
      <h1>HomePage</h1>
      <div className="grid grid-cols-3">{renderListMovie()}</div>
    </div>
  );
}
