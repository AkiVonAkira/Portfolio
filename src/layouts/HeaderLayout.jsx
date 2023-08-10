import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: var(--secondary);
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2em;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const NavLinkStyled = styled(NavLink)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 1em;
  border-radius: 4px;
  color: white;
  transition: background 0.3s;

  &.active {
    background: var(--primary);
    box-shadow: 0 10px 20px -15px black;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 20px -15px black;
  }
  @media (max-width: 480px) {
  }
`;

const HeaderLayout = () => {
  return (
    <Header>
      <h1 className="text-3xl font-bold ">Ya Name</h1>
      <Nav>
        <NavLinkStyled to="/" activeclassname="active" exact="true">
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/portfolio" activeclassname="active">
          Portfolio
        </NavLinkStyled>
        <NavLinkStyled to="/contact" activeclassname="active">
          Contact
        </NavLinkStyled>
      </Nav>
    </Header>
  );
};

export default HeaderLayout;
