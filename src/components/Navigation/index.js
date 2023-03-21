import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  background: grey;
  width: 100vw;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: unset;
  background: 

  &:hover {
    background: hotpink;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink href="/" aria-label="Go to spotlight art piece">
        Spotlight
      </StyledNavLink>
      <StyledNavLink href="/art-pieces/" aria-label="Go to all art pieces">
        Pieces
      </StyledNavLink>
    </StyledNav>
  );
}
