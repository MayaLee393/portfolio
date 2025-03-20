import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
    Nav, NavBrand, NavLink, NavMenu, Bars, MobileMenu, CloseIcon 
} from "./NavBarElements";
// import InstanceLoader from "../../pages/instance_loader";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true); // Show navbar initially
    const location = useLocation(); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeFavicon = (iconURL) => {
        let link = document.querySelector("link[rel~='icon']");
        if (link) {
            link.href = iconURL;
        } else {
            const newLink = document.createElement("link");
            newLink.rel = "icon";
            newLink.href = iconURL;
            document.head.appendChild(newLink);
        }
    };

    useEffect(() => {
        const pageTitles = {
            "/": "Maya Lee - Home",
            "/projects": "Maya Lee - Projects",
            "/blog": "Maya Lee - Blog",
            "/about": "Maya Lee - About"
        };

        // Update document title
        document.title = pageTitles[location.pathname] || "Maya Lee";
        changeFavicon(`${process.env.PUBLIC_URL}/icon.png`);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is at the top or scrolled down
            if (window.scrollY === 0) {
                setShowNavbar(true);  // Show Navbar if at the top of the page
            } else {
                setShowNavbar(false); // Hide Navbar if scrolled down
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty dependency array to run once on mount

    return (
        <Nav isVisible={showNavbar}>
            <NavBrand to="/"  className="flex items-center"><img src={`${process.env.PUBLIC_URL}/icon.PNG`} alt=":) " className="w-[30px] mr-2"  />Maya Lee</NavBrand>
            <Bars onClick={toggleMenu} />
            <NavMenu>
                <NavLink to="/projects" activeStyle>Projects</NavLink>
                <NavLink to="/blog" activeStyle>Blog</NavLink>
                <NavLink to="/about" activeStyle>About Me</NavLink>
            </NavMenu>

            {isOpen && (
                <MobileMenu>
                    <CloseIcon onClick={toggleMenu} />
                    <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
                    <NavLink to="/blog" onClick={toggleMenu}>Blog</NavLink>
                    <NavLink to="/about" onClick={toggleMenu}>About Me</NavLink>
                </MobileMenu>
            )}
        </Nav>
    );
};

export default Navbar;
