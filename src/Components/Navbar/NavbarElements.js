// Icons
import { FaBars } from "react-icons/fa";

// Import React Router (for navigation)
import { NavLink as Link } from "react-router-dom";

// Import custom styling
import styled from "styled-components";

export const Nav = styled.nav`
  color: white;
  background:  black;
  height: 85px;
  display: flex;
  justify-content: left;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12; 
`;

export const Header = styled.h1`
  margin: 4 rem;
  color: red;
  `;

export const NavLink = styled(Link)`
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
  &:hover {
    color: white;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;