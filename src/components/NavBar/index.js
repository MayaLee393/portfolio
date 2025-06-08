import React, { useState, useEffect, useRef } from "react";
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

    const lastScrollY = useRef(0);
    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            //  console.log('scrollY:', currentScrollY, 'visible:', currentScrollY < lastScrollY.current, 'lastscrollY:', lastScrollY.current );

            if (currentScrollY <= 0) {
            setShowNavbar(true); // Always show at the top
            } else if (currentScrollY < lastScrollY.current) {
            setShowNavbar(true); // Scrolling up
            } else {
            setShowNavbar(false); // Scrolling down
            }

            lastScrollY.current = currentScrollY;

        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);


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
