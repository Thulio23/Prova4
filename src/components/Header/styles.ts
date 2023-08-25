import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  border-bottom: 0.4rem solid ${colors.secondary};
  display: flex;
  height: 6rem;
  picture {otícias
    margin-left: 0.5rem;
    padding: 0.5rem;
    img {
      height: 100%;
    }
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
    li:hover {
      background-color: ${colors.primary};
    }
  }
`