import React from 'react';
import styled, { css } from 'styled-components';
import One from '../../Assets/One.jpg';
import Two from '../../Assets/Two.jpg';
import Three from '../../Assets/Three.jpg';
import Four from '../../Assets/Four.jpg';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Directory() {
  return (
    <MainDiv>
      <MainWrapper>
        <QuarterDiv two>
          <StyledLink to="/search/vasen">Tassen</StyledLink>
        </QuarterDiv>

        <QuarterDiv four>
          <StyledLink to="/search/andere">Andere</StyledLink>
        </QuarterDiv>
        <div>
          <Div>
            <iframe
              width="800"
              height="775"
              src="https://www.youtube.com/embed/0pt0MdReMts"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Div>
          <div>
            <Footer />
          </div>
        </div>
      </MainWrapper>
    </MainDiv>
  );
}

export default Directory;

//Styled Components

const MainDiv = styled.div`
  height: 100%;
  background-color: gray;
  width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;

  margin: auto;
`;

const QuarterDiv = styled.div`
  width: 70%;
  height: 80vh;
  display: flex;
  background-size: cover;

  ${(props) =>
    props.one &&
    css`
      background-image: url(${One});
    `}
  ${(props) =>
    props.two &&
    css`
      background-image: url(${Two});
      height: 50vh;
    `}
    ${(props) =>
    props.three &&
    css`
      background-image: url(${Three});
    `}
    ${(props) =>
    props.four &&
    css`
      background-image: url(${Four});
    `}
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  margin: auto auto;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 400;
  background-color: white;
  padding: 10px 10px;
`;
