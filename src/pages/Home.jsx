/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import GithubStats from "../components/GithubStats";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row;
  flex-wrap: wrap;
  padding: 1.5rem;
  gap: 1em;
  background-color: var(--secondary);
  border-radius: 0.5rem;
  box-shadow: 0 10px 20px -15px black;
  justify-content: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <GithubStats></GithubStats>
    </HomeContainer>
  );
};

export default Home;
