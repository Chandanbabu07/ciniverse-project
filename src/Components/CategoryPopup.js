import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCategoryHover } from "../reduxdata/reduxstore/reduxslice";
import { genres } from "../common";
const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 855px;
  height: 250px;
  border-right: 4px solid green;
  border-left: 4px solid green;
  gap: 75px;
  padding: 20px;
  font-size: 20px;
  font-family: popins;
  font-weight: 400;
  border-radius: 5px;
  position: absolute;
  right: 6px;
  z-index: 1;
  top: 83px;
`;

const Wrapper1 = styled.ul`
  width: 257px;
  text-align: left;
  margin-top: -26px;
`;

const Wrapper2 = styled.ul`
  width: 250px;
  text-align: left;
  margin-top: -26px;
`;

const Wrapper3 = styled.div`
  margin-top: -26px;
`;

const GenereList = styled.li`
  padding: 5px;
  list-style-type: none;
  font-size: 16px;
  display: inline-block;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    color: green;
    border-bottom: 1px solid green;
    transform-origin: bottom right;
  }
`;

const LanguagesList = styled.li`
  padding: 5px;
  list-style-type: none;
  font-size: 16px;
  display: inline-block;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    color: green;
    border-bottom: 1px solid green;
    transform-origin: bottom right;
  }
`;

const YearForm = styled.form``;

const YearInputFiled = styled.input`
  background-color: black;
  color: #ffffff;
  border: none;
  padding: 6px;
  border-radius: 10px;
`;

const YearButton = styled.button`
  margin-top: 16px;
  padding: 7px 20px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  border: none;

  &:hover {
    background-color: green;
    color: #ffffff;
  }
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
        <Wrapper3>
          <h4 style={{ color: "green" }}>Year</h4>

          <YearForm>
            <YearInputFiled placeholder="Enter the year"></YearInputFiled>
            <YearButton>Submit</YearButton>
          </YearForm>
        </Wrapper3>
      </MainWrapper>
    </>
  );
};
