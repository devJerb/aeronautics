import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarModelElements'
import { animateScroll as scroll } from 'react-scroll'

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to="/aeronautics" onClick={toggleHome}>Flight Controls</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="roll" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Roll</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="nose" smooth={true} duration={500} spy={true} exact='true' offset={-80}  activeClass="active">Pitch</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="rudder" smooth={true} duration={500} spy={true} exact='true' offset={-80}  activeClass="active">Yaw</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/dashboard">Account</NavBtnLink>
                        </NavBtn>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
};

export default NavBar