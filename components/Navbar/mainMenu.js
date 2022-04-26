import React from "react";
import Image from "next/image";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaVolumeMute, FaMoon, FaCaretUp, FaBan } from "react-icons/fa";

import logo from "./images/logo.svg";
import styles from "../../styles/navbar.module.css";

const  MainMenu = () => {
    return (
        <Navbar
            bg="white"
            expand="lg"
            className="border-bottom shadow-sm flex-column"
            sticky="top"
        >
            <Container>
                <Navbar.Brand href="#">
                    <Image
                        src={logo}
                        width={100}
                        height={50}
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="justify-content-between gap-2 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Item><Nav.Link>Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link>Mint</Nav.Link></Nav.Item>
                        <NavDropdown title="Chikn" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Roost</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Leaderboard</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="FarmLand" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">LP Farm</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Tiles / Traits</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Wallet" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Chikn</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Roost</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">FarmLand</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Market" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Chikn</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Roost</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">FarmLand</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Button variant="light" className="border-dark">
                                <FaVolumeMute/>
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="light" className="border-dark">
                                <FaMoon/>
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                                variant="danger"
                                className={`px-4 ${styles['wallet-connect-btn']}`}
                            >
                                Connect Wallet
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
            <Container className="justify-content-end">
                <IconContext.Provider value={{ size: "1em" }}>
                    <div className="currency-group d-flex gap-1">
                        <div className={`${styles["badge-currency"]} text-muted badge border gap-1`}>
                            <span>EGG</span>
                            <span>1.09</span>
                            <span><FaCaretUp/></span>
                        </div>
                        <div className={`${styles["badge-currency"]} text-muted badge border gap-1`}>
                            <span>FEED</span>
                            <span>0.0022</span>
                            <span><FaCaretUp/></span>
                        </div>
                        <div className={`${styles["badge-currency"]} text-muted badge border gap-1`}>
                            <span>AVAX</span>
                            <span>69</span>
                            <span><FaCaretUp/></span>
                        </div>
                        <div className={`${styles["badge-currency"]} text-muted badge border gap-1`}>
                            <span>GAS</span>
                            <span>78.5</span>
                            <span><FaBan/></span>
                        </div>
                    </div>
                </IconContext.Provider>
            </Container>
        </Navbar>
    );
}
export default MainMenu;