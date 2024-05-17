import styled from "styled-components";
import mainLogo from "../Components/MyProjImages/white-logo.png";
import searchIcon from "../Components/MyProjImages/search.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryHover,
  setShowNavSlider,
} from "../reduxdata/reduxstore/reduxslice";
import { CategoryPopup } from "./CategoryPopup";
import crossIcon from "../Components/MyProjImages/CrossIcon.png";
import { MobileNavBar } from "./MobileNavBar";
const HeaderWrapper = styled.div``;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #292929;
  height: 5rem;
  gap: 110px;
  font-size: 1.3rem;
  font-family: fangsang;
`;

const NameLogoWrapper = styled.div`
  padding: 16px;
  padding-left: 60px;

  @media screen and (max-width: 767px) {
    padding-left: 28px;
  }
`;

const MainLogo = styled.img`
  width: 140px;

  @media screen and (max-width: 1280px) {
    width: 120px;
  }
`;

const SearchWrapper = styled.div`
  padding: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  border: none;
`;

const SearchInput = styled.input`
  width: 160%;
  padding: 0.5rem 6rem;
  border-radius: 25px;
  margin-right: -2.5rem;
  font-size: inherit;
  font-family: inherit;
  border: none;

  @media screen and (max-width: 1280px) {
    font-size: 15px;
    padding: 0.5rem 2rem;
  }

  ::placeholder {
    color: grey;
  }
`;
const SearchButton = styled.img`
  width: 28px;

  @media screen and (max-width: 1280px) {
    width: 18px;
  }
`;

const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const NavBarOptionsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 100px;
  color: #ffffff;
  height: 100%;
  align-items: center;
`;

const NavBarOption = styled.li`
  list-style-type: none;
  height: 100%;
  align-items: center;
  display: flex;
  padding: 0 2rem;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }

  @media screen and (max-width: 1400px) {
    font-size: 14px;
  }

  &:hover {
    background-color: #d5d4d4;
    color: #000000;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    padding-left: 70px;
  }
`;

const HamburgerIcon = styled.div`
  @media screen and (max-width: 767px) {
    width: 73px;
    z-index: 1;
    padding-top: 13px;
    padding-left: 18px;
  }
`;

const CrossIcon = styled.img`
  display: none;
  @media screen and (max-width: 767px) {
    width: 50px;
    display: block;
  }
`;
export const HeaderMenu = () => {
  const dispatch = useDispatch();

  const { categoryHover, showNavSlider } = useSelector(
    (state) => state.appScene
  );

  const handleCategoryHover = () => {
    dispatch(setCategoryHover(true));
  };

  const handleCategoryHoverLeave = () => {
    dispatch(setCategoryHover(false));
  };

  const handleHambuger = () => {
    dispatch(setShowNavSlider(true));
  };

  const handleCancel = () => {
    dispatch(setShowNavSlider(false));
  };
  return (
    <div>
      <HeaderWrapper>
        <HeaderSection>
          <NameLogoWrapper>
            <MainLogo src={mainLogo}></MainLogo>
            {/* <MainName>CineVerse</MainName> */}
          </NameLogoWrapper>

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
                onMouseLeave={() => handleCategoryHoverLeave()}
                onMouseEnter={() => handleCategoryHover()}
              >
                CATEGORIES
              </NavBarOption>

              <NavBarOption>ABOUT</NavBarOption>
            </NavBarOptionsWrapper>
          </NavBarWrapper>
          <HamburgerWrapper>
            <HamburgerIcon>
              {showNavSlider ? (
                <CrossIcon
                  onClick={() => handleCancel()}
                  src={crossIcon}
                ></CrossIcon>
              ) : (
                <svg
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="50px"
                  height="50px"
                  onClick={() => handleHambuger()}
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                </svg>
              )}
            </HamburgerIcon>
          </HamburgerWrapper>
          {categoryHover && <CategoryPopup></CategoryPopup>}
        </HeaderSection>
      </HeaderWrapper>
    </div>
  );
};
