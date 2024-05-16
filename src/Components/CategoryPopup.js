import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCategoryHover } from "../reduxdata/reduxstore/reduxslice";
import { genres } from "../common";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 584px;
  height: 315px;
  border: 3px solid green;
  gap: 75px;
  padding: 20px;
  font-size: 20px;
  font-family: popins;
  font-weight: 400;
  border-radius: 10px;
  background-color: wheat;
  position: absolute;
  right: 10px;
  z-index: 1;
`;

const Wrapper1 = styled.ul``;

const Wrapper2 = styled.ul``;

const Wrapper3 = styled.div`
  color: green;
`;

const GenereList = styled.li`
  padding: 5px;
  list-style-type: none;
  font-size: 16px;
  display: inline-block;
  letter-spacing: 1px;
`;

const LanguagesList = styled.li`
  padding: 5px;
  list-style-type: none;
  font-size: 16px;
  display: inline-block;
  letter-spacing: 1px;
`;

export const CategoryPopup = () => {
  const LanguageListObj = {
    en: "English",
    hi: "Hindi",
    kn: "Kannada",
    te: "Telugu",
    cn: "Chinese",
    ko: "Korean",
  };

  const dispatch = useDispatch();

  const handleCategoryHover = () => {
    dispatch(setCategoryHover(true));
  };

  const handleCategoryHoverLeave = () => {
    dispatch(setCategoryHover(false));
  };

  return (
    <>
      <MainWrapper
        onMouseLeave={() => handleCategoryHoverLeave()}
        onMouseEnter={() => handleCategoryHover()}
      >
        <Wrapper1>
          <h3 style={{ color: "green" }}>Genere</h3>

          {genres &&
            genres?.map((item, index) => {
              return <GenereList>{item.name}</GenereList>;
            })}
        </Wrapper1>
        <Wrapper2>
          <h3 style={{ color: "green" }}> Popular Languages</h3>

          {Object.keys(LanguageListObj).map((langaues) => {
            return <LanguagesList>{LanguageListObj[langaues]}</LanguagesList>;
          })}
        </Wrapper2>
        <Wrapper3>Year</Wrapper3>
      </MainWrapper>
    </>
  );
};
