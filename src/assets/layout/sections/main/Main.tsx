import React from 'react';
import styled from "styled-components";
import photoUser from './../../../images/photo-user.jpg'
import {Container} from "../../../../coponents/Container";

export const Main = () => {
    return (
        <SMain>
            <Container>
                <div>
                    <SmallText>Hi👋, I’m a </SmallText>
                    <MainTitle>Software developer</MainTitle>
                    <MainDescription>I’m John Doe, a developer dedicated to making the world a better place one line of code at a time.</MainDescription>
                    <button>Hire me</button>
                </div>

                <img src={photoUser} alt="user's photo"/>
            </Container>


        </SMain>
    );
};

const SMain = styled.main`
    margin-top: 84px;
    background: radial-gradient(90.6% 78.78% at 93.96% 12.39%, rgba(220, 227, 228, 0.71) 0%, #FCFCFC 100%);
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
`

const SmallText = styled.h2`

`

const MainTitle = styled.h1`

`

const MainDescription = styled.h4`

`

