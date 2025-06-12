import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


// Navbar Container
export const Nav = styled.nav`
    background:rgba(103, 89, 122, 0.5);
    box-shadow: 0 0 5px 5px rgba(103, 89, 122, 0.5);
    backdrop-filter: blur(5px);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 12;
    position: fixed;
    top: ${({ $isvisible }) => ($isvisible ? '0' : '-60px')}; /* Controls navbar visibility */
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    transition: top 0.3s ease-in-out;
`;



// color: rgb(144, 219, 176); not used - temp
// Branding / Site Name
export const NavBrand = styled(Link)`
    font-family: "VT323", monospace;
    letter-spacing: 2.5px;
    color: #EFF1F3;
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    transition: 0.3s;

    &:hover {
        color: #67597A;
        transform: translateY(-5px);
    }
`;

// Desktop Menu
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled(Link)`
    color: #EFF1F3;
    text-decoration: none;
    padding: 0 1rem;
    font-size: 1.4rem;
    transition: 0.3s;

    &.active {
        color:#67597A;

        @media screen and (max-width: 768px) {
            color:#f3def7
        }
    }

    &:hover {
        color:#544E61;
        transform: translateY(-5px);

        @media screen and (max-width: 768px) {
            color: rgb(229, 197, 255)
        }
    }
`;

// Mobile Hamburger Icon
export const Bars = styled(FaBars)`
    display: none;
    color: #EFF1F3;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        cursor: pointer;
    }
`;

// Mobile Dropdown Menu
export const MobileMenu = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background:rgba(103, 89, 122, 0.8); 
    box-shadow: 0 0 5px 5px rgba(103, 89, 122, 0.5);
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
`;

export const CloseIcon = styled(FaTimes)`
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 2rem;
    cursor: pointer;
    color: #EFF1F3;
`;
