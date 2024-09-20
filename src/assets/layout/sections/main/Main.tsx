import React from 'react';
import styled from "styled-components";
import photoUser from './../../../images/photo-user.jpg'
import {Container} from "../../../../coponents/Container";
import {FlexWrapper} from "../../../../coponents/FlexWrapper";
import {Theme} from "../../../../styles/Theme";

import {ReactComponent as Zigzags} from '../../../images/decorativeElements/zigzags.svg';
import {ReactComponent as Plus} from '../../../images/decorativeElements/plus.svg';
import {ReactComponent as Cube} from '../../../images/decorativeElements/cube.svg';
import {ReactComponent as Ellipse} from '../../../images/decorativeElements/ellipse.svg';
import {ReactComponent as Circles} from '../../../images/decorativeElements/circles.svg';


export const Main = () => {
    return (
        <SMain>
            <Container>
                <FlexWrapper alignItems={'center'} justifyContent={'space-between'}>
                    <PerformanceText>
                        <SmallText>Hi👋, I’m a </SmallText>
                        <MainTitle>Software Developer</MainTitle>
                        <MainDescription>
                            I’m <span>John Doe</span>, a developer dedicated to making the world a better place one line of code at a time.
                        </MainDescription>
                        <SButtonAccent>Hire me</SButtonAccent>
                    </PerformanceText>

                    <PhotoWrapper>
                        <Photo src={photoUser} alt="user's photo"/>

                        <SZigzag/>
                        <SPlus/>
                        <SCube/>
                        <SEllipse/>
                        <SCircles/>

                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </SMain>
    );
};

const SMain = styled.main`
    margin-top: 84px;
    display: flex;
    min-height: 496px;
`

const PerformanceText = styled.div`
    max-width: 554px;
    max-height: 250px;
    outline: 1px solid #0D54BE;
`

const SmallText = styled.h2`
    font-size: 32px;
    line-height: 38px;
    font-weight: 600;
    color: ${Theme.colors.font.secondaryFont};
`

const MainTitle = styled.h1`
    font-size: 48px;
    line-height: 56px;
    font-weight: 600;
    color: ${Theme.colors.font.secondaryFont};

`

const MainDescription = styled.h4`
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: ${Theme.colors.font.secondaryFont};
    margin: 30px 0;

    span {
        font-weight: 700;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    height: 496px;
    padding: 50px 25px;
    border: 1px solid ${Theme.colors.font.secondaryFont};
`

const Photo = styled.img`
    max-width: 344px;
    max-height: 390px;
    object-fit: cover;
`

const SZigzag = styled(Zigzags)`
    position: absolute;
    left: -25px;
    top: 34px;
`

const SPlus = styled(Plus)`
    position: absolute;
    right: 220px;
    top: 0;
`

const SCube = styled(Cube)`
    position: absolute;
    top: 0;
    right: 0;
`

const SEllipse = styled(Ellipse)`
    position: absolute;
    bottom: 16px;
    right: 366px;
`

const SCircles = styled(Circles)`
    position: absolute;
    bottom: 0;
    right: 0;
`


const SButtonAccent = styled.button`
    width: 98px;
    height: 42px;
    border-radius: 4px;
    padding: 8px 16px;
    background: ${Theme.colors.accent};
    box-shadow: 0 1px 5px 0 #00000033,
    0 3px 1px 0 #0000001F,
    0 2px 2px 0 #00000024;
    color: ${Theme.colors.font.lightFont};
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;

`