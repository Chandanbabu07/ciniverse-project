import { useEffect } from "react";
import styled from "styled-components";
import searchIcon from "../Components/MyProjImages/search.svg";

const MainWrapper = styled.div`
  @media screen and (max-width: 767px) {
    height: 95vh;
    background-color: #ffffff;
    width: 200px;
    position: absolute;
    z-index: 1;
    border-right: 5px solid #000000;
  }
`;

const SearchWrapper = styled.div`
  @media screen and (max-width: 767px) {
    z-index: 2;
  }
`;

const SearchForm = styled.form`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    border: none;
  }
`;

const SearchInput = styled.input`
  @media screen and (max-width: 767px) {
    border-radius: 25px;
    margin-right: -2.5rem;
    font-size: 14px;
    border: none;
    background-color: darkgray;
    padding: 10px;
    margin-top: 7px;
    margin-left: 3px;
  }

  ::placeholder {
    color: grey;
  }
`;
const SearchButton = styled.img`
  @media screen and (max-width: 767px) {
    width: 16px;
  }
`;

const NavBarWrapper = styled.nav`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

const NavBarOptionsWrapper = styled.ul`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    color: #ffffff;
    height: 100%;
    gap: 18px;
  }
`;

const NavBarOption = styled.li`
  @media screen and (max-width: 767px) {
    list-style-type: none;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
    cursor: pointer;
    color: #000000;
    margin-right: 36px;
    font-weight: 500;
  }
`;
export const MobileNavBar = () => {
  // useEffect(() => {
  //     if (lightboxImage) {
  //         document.body.style.overflow = 'hidden'; // Disable scrollbar
  //     } else {
  //         document.body.style.overflow = 'auto'; // Enable scrollbar
  //     }

  //     // Cleanup function
  //     return () => {
  //         document.body.style.overflow = 'auto'; // Ensure scrollbar is enabled when component unmounts
  //     };
  // }, [lightboxImage]);

  return (
    <>
      <MainWrapper>
        <SearchWrapper>
          <SearchForm>
            <SearchInput placeholder="Seach Cinemas"></SearchInput>
            <SearchButton src={searchIcon}></SearchButton>
          </SearchForm>
        </SearchWrapper>

        <NavBarWrapper>
          <NavBarOptionsWrapper>
            <NavBarOption>POPULAR</NavBarOption>
            <NavBarOption
            //   onMouseLeave={() => handleCategoryHoverLeave()}
            //   onMouseEnter={() => handleCategoryHover()}
            >
              CATEGORIES
            </NavBarOption>

            <NavBarOption>ABOUT</NavBarOption>
          </NavBarOptionsWrapper>
        </NavBarWrapper>
      </MainWrapper>
    </>
  );
};
