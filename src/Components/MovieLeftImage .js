import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMovies } from "../reduxdata/reduxstore/reduxslice";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../Config";
import { getGenere } from "../common";
import { language } from "../language";

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  padding: 1rem;
  gap: 4px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
    padding: 0;
  }
`;

const LeftImageWrapper = styled.div`
  display: flex;
  background-color: whitesmoke;
  padding: 5px;
  border: 1px soild red;
`;

const ImageWrap = styled.div``;

const TextWrap = styled.div`
  width: 220px;
`;

const Image = styled.img`
  height: 22rem;
  margin-top: 3px;

  @media screen and (max-width: 767px) {
    height: 17rem;
  }
`;

const MovieTitleWrapper = styled.div``;
const MovieTitle = styled.h1`
  font-size: 20px;
  font-family: Fjalla One, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: left;
  padding-left: 30px;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`;

const MovieYear = styled.span`
  display: block;
  font-size: 13px;
  opacity: 0.7;
  font-family: Gill Sans, Gill Sans MT, Calibri, Trebuchet MS;
  letter-spacing: 0.5px;
  color: green;
`;

const MovieDescription = styled.p`
  text-align: left;
  padding: 0 30px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

const MovieOptions = styled.div``;

const MovieLanguageandRatings = styled.div``;

const MovieUL = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0 30px;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    gap: 3px;
    padding: 0 15px;
  }
`;

const MovieLI = styled.li`
  list-style-type: none;
  font-size: 12px;
  color: green;
  border-bottom: 1px solid green;
  padding: 3px;
  transition: all 0.7s;

  @media screen and (max-width: 767px) {
    font-size: 9px;
  }

  &:hover {
    background-color: green; /* Change background color on hover */
    color: white;
    cursor: pointer; /* Change cursor to pointer on hover */
    box-shadow: 0 1rem 2rem hsla(0, 0%, 100%, 0.15);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
`;

const MovieLanguageandRatingsUL = styled.ul`
  display: flex;
  gap: 76px;
  padding: 0 30px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

const MovieLanguageandRatingsLI = styled.li`
  list-style-type: none;
`;

const IconLI = styled.div`
  width: 16px;
`;

const Rating = styled.span``;

const RightImageWrapper = styled.div`
  display: flex;
  background-color: #000000;
  padding: 5px;
  border: 1px soild red;

  &:hover {
    box-shadow: 0px 8px 24px gray inset;
  }
`;

const LeftTextWrap = styled.div`
  color: #ffffff;
  width: 220px;
`;
export const MovieLeftImage = () => {
  const dispatch = useDispatch();

  const { movieList } = useSelector((state) => state.appScene);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  console.log("getMovies", movieList?.results);
  return (
    <>
      <MainWrapper>
        {movieList &&
          movieList?.results &&
          movieList?.results.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <LeftImageWrapper>
                  <ImageWrap>
                    <Image
                      src={IMAGE_BASE_URL + BACKDROP_SIZE + item.poster_path}
                    ></Image>
                  </ImageWrap>
                  <TextWrap>
                    <MovieTitleWrapper>
                      <MovieTitle>
                        {item.title}
                        <MovieYear>
                          {item.release_date.substring(0, 4)}
                        </MovieYear>
                      </MovieTitle>
                    </MovieTitleWrapper>
                    <MovieDescription>{item.overview}</MovieDescription>
                    <MovieOptions>
                      <MovieUL>
                        {item?.genre_ids?.map((Id) => (
                          <MovieLI>{getGenere(Id)}</MovieLI>
                        ))}
                      </MovieUL>
                    </MovieOptions>
                    <MovieLanguageandRatings>
                      <MovieLanguageandRatingsUL>
                        <MovieLanguageandRatingsLI>
                          {language[item.original_language]}
                        </MovieLanguageandRatingsLI>
                        <MovieLanguageandRatingsLI>
                          <IconLI>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star-half-alt"
                              class="svg-inline--fa fa-star-half-alt fa-w-17 "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 536 512"
                            >
                              <path
                                fill="currentColor"
                                d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                              ></path>
                            </svg>
                          </IconLI>
                          <Rating>{item.vote_average}</Rating>
                        </MovieLanguageandRatingsLI>
                      </MovieLanguageandRatingsUL>
                    </MovieLanguageandRatings>
                  </TextWrap>
                </LeftImageWrapper>
              );
            } else {
              return (
                <RightImageWrapper>
                  <LeftTextWrap>
                    <MovieTitleWrapper>
                      <MovieTitle>
                        {item.title}
                        <MovieYear>
                          {item.release_date.substring(0, 4)}
                        </MovieYear>
                      </MovieTitle>
                    </MovieTitleWrapper>
                    <MovieDescription>{item.overview}</MovieDescription>
                    <MovieOptions>
                      <MovieUL>
                        {item?.genre_ids?.map((Id) => (
                          <MovieLI>{getGenere(Id)}</MovieLI>
                        ))}
                      </MovieUL>
                    </MovieOptions>
                    <MovieLanguageandRatings>
                      <MovieLanguageandRatingsUL>
                        <MovieLanguageandRatingsLI>
                          {language[item.original_language]}
                        </MovieLanguageandRatingsLI>
                        <MovieLanguageandRatingsLI>
                          <IconLI>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star-half-alt"
                              class="svg-inline--fa fa-star-half-alt fa-w-17 "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 536 512"
                            >
                              <path
                                fill="currentColor"
                                d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                              ></path>
                            </svg>
                          </IconLI>
                          <Rating>{item.vote_average}</Rating>
                        </MovieLanguageandRatingsLI>
                      </MovieLanguageandRatingsUL>
                    </MovieLanguageandRatings>
                  </LeftTextWrap>
                  <ImageWrap>
                    <Image
                      src={IMAGE_BASE_URL + BACKDROP_SIZE + item.poster_path}
                    ></Image>
                  </ImageWrap>
                </RightImageWrapper>
              );
            }
          })}
      </MainWrapper>
    </>
  );
};
