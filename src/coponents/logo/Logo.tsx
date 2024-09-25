import React from 'react';
import logo from '../../assets/images/icon/logo.svg'
import styled from "styled-components";

export const Logo = () => {
    return (
            <a href='#'>
                <Image>
                    <img src={logo} alt="logo"/>
                </Image>
            </a>
    );
};

const Image = styled.a`
    display: flex;
`