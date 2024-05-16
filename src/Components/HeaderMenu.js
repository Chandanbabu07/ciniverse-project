import styled from "styled-components";
import mainLogo from "../Components/MyProjImages/white-logo.png";
import searchIcon from "../Components/MyProjImages/search.svg";
import { useDispatch } from "react-redux";
import { setCategoryHover } from "../reduxdata/reduxstore/reduxslice";
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
`;

const MainLogo = styled.img`
  width: 140px;
`;
// const MainName = styled.p``;

const SearchWrapper = styled.div`
  padding: 20px;
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

  ::placeholder {
    color: grey;
  }
`;
const SearchButton = styled.img`
  width: 28px;
`;

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 65px;
  padding-left: 140px;
  padding-top: 10px;
`;
const PopularWrapper = styled.div``;
const Popular = styled.p`
  color: whitesmoke;
`;
const CategoriesWrapper = styled.div``;

const Categories = styled.p`
  color: whitesmoke;
`;

const AboutWrapper = styled.div``;
const About = styled.p`
  color: whitesmoke;
`;

export const HeaderMenu = () => {
  const dispatch = useDispatch();

  const handleCategoryHover = () => {
    dispatch(setCategoryHover(true));
  };

  const handleCategoryHoverLeave = () => {
    dispatch(setCategoryHover(false));
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
            <PopularWrapper>
              <Popular>Popular</Popular>
            </PopularWrapper>
            <CategoriesWrapper
              onMouseLeave={() => handleCategoryHoverLeave()}
              onMouseEnter={() => handleCategoryHover()}
            >
              <Categories>Categories</Categories>
            </CategoriesWrapper>
            <AboutWrapper>
              <About>About</About>
            </AboutWrapper>
          </NavBarWrapper>
        </HeaderSection>
      </HeaderWrapper>
    </div>
  );
};
