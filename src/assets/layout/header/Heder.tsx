import React, {useState} from 'react';
import styled from "styled-components";
import {Logo} from "../../../coponents/logo/Logo";
import {HeaderMenu} from "./HeaderMenu";
import {Container} from "../../../coponents/Container";
import {FlexWrapper} from "../../../coponents/FlexWrapper";


export const Header = () => {

    return (

        <SHeader>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo/>
                    <HeaderMenu/>
                </FlexWrapper>
            </Container>
        </SHeader>
    );
};

const SHeader = styled.header`
    height: 84px;
    background-color: #FCFCFC;
    position: fixed;
    z-index: 999999;
    top: 0;
    right: 0;
    left: 0;
    padding: 24px 0;
    box-shadow: 0 1px 3px 0 #00000033,
                0 2px 1px 0 #0000001F,
                0 1px 1px 0 #00000024;
    
`