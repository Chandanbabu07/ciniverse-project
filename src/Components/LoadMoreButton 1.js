import styled from "styled-components";

const MainWrapper = styled.div``;

const Button = styled.button`
  color: green;
  padding: 15px 45px;
  background-color: #ffffff;
  border: none;
  font-family: Fjalla One, sans-serif;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: 700;

  /* &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active &:focus {
    outline: none;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  } */

  /* &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    background-color: #fff;
  } */
`;

export const LoadMoreButton = () => {
  return (
    <>
      <MainWrapper>
        <Button>Load More</Button>
      </MainWrapper>
    </>
  );
};
