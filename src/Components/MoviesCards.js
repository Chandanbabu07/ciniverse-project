import styled from "styled-components";
import { MovieLeftImage } from "./MovieLeftImage ";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../reduxdata/reduxstore/reduxslice";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../Config";
import { LoadMoreButton } from "./LoadMoreButton 1";

const MainWrapper = styled.div``;

const HeroCardWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 85vh;
`;

const HeroMoviePoster = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 70%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url(${(props) => props.logo});
  background-size: cover;

  @media screen and (max-width: 767px) {
    background-position: center;
  }
`;

const HeroMovieText = styled.div`
  position: absolute;
  width: 80%;
  color: white;
  bottom: 2rem;
  text-align: left;
  left: 100px;
  font-size: 2rem;

  @media screen and (max-width: 767px) {
    font-size: 21px;
    width: 80%;
    left: 60px;
  }
`;
const HeroMovieTitle = styled.h2``;
const HeroMovieDescriptionWrapper = styled.div``;
const HeroMovieDescription = styled.p``;

const CardWrapper = styled.div``;

const LoadMoreButtonWrapper = styled.div`
  margin-top: 40px;
`;

export const MoviesCards = () => {
  const dispatch = useDispatch();

  const { movieList } = useSelector((state) => state.appScene);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  console.log("MovieListMovieList", movieList?.results);
  return (
    <>
      <MainWrapper>
        {movieList && movieList?.results && movieList?.results[0] && (
          <HeroCardWrapper>
            <HeroMoviePoster
              logo={
                IMAGE_BASE_URL +
                BACKDROP_SIZE +
                movieList?.results[0]?.backdrop_path
              }
            ></HeroMoviePoster>
            <HeroMovieText>
              <HeroMovieTitle>{movieList?.results[0]?.title}</HeroMovieTitle>
              <HeroMovieDescriptionWrapper>
                <HeroMovieDescription>
                  {movieList?.results[0]?.overview}
                </HeroMovieDescription>
              </HeroMovieDescriptionWrapper>
            </HeroMovieText>
          </HeroCardWrapper>
        )}

        <CardWrapper>
          <MovieLeftImage></MovieLeftImage>
        </CardWrapper>

        <LoadMoreButtonWrapper>
          <LoadMoreButton></LoadMoreButton>
        </LoadMoreButtonWrapper>
      </MainWrapper>
    </>
  );
};
