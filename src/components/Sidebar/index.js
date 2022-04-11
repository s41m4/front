import React from 'react'
import logo from '../assets/logo.svg'
import { Home, Box, Server, Shield, LifeBuoy, User } from 'react-feather'
import styled from 'styled-components';
import { useState } from 'react';

const Button = styled.button`
    background-color: var(--black);
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before,
    &::after {
        content: "";
        background-color: var(--white);
        height: 2px;
        width: 1rem;
        position: absolute;
        transition: all 0.3s ease;
    }

    &::before {
        top: ${(props) => (props.clicked ? "1.5" : "1rem")};
        transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)" )};
    }

    &::after {
        top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
        transform: ${(props) => (props.clicked ? "rotate(-135deg": "rotate(0)" )};

    }
    `;

const Sidebar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 
    return (
        <>
            <Button clicked={click} onClick={() => handleClick()}>
                click
            </Button>        
            <SidebarContainer>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li>
                        <Home size={20} />
                        <span>Home</span>
                    </li>
                    <li>
                        <Box size={20} />                        
                        <span>Upload Firmware</span>
                    </li>
                    <li>
                        <Server size={20} />
                        <span>All Firmware</span>
                    </li>
                    <li>
                        <Shield size={20} />
                        <span>Automatic Scan</span>
                    </li>
                    <li>
                        <LifeBuoy size={20} />
                        <span>Raise Support</span>
                    </li>
                    <li>
                        <User size={20} />
                        <span>Settings</span>
                    </li>
                </ul>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
