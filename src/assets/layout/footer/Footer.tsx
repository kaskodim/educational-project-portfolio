import React from 'react';
import styled from "styled-components";
import iconsSocialSprite from './../../images/icon/iconsSocialSprite.svg'
import {Icon} from "../../../coponents/icon/Icon";
import footerImg from "../../images/decorativeElements/bg-footer.svg"
import {Container} from "../../../coponents/Container";
import {FlexWrapper} from "../../../coponents/FlexWrapper";

export const Footer = () => {
    return (
        <SFooter>
            <Container>
                <FlexWrapper direction={'row'} justifyContent={'space-between'}>

                    <SocialWrapper>
                        <BlockDescription>My social media links:</BlockDescription>
                        <IconContainer>
                            <Icon src={iconsSocialSprite} iconId={'in'} width={'30px'} height="30" viewBox={'0 0 30 30'}/>
                            <Icon src={iconsSocialSprite} iconId={'whatsapp'} width={'30px'} height="30" viewBox={'0 0 30 30'}/>
                            <Icon src={iconsSocialSprite} iconId={'twitter'} width={'30px'} height="30" viewBox={'0 0 30 30'}/>
                            <Icon src={iconsSocialSprite} iconId={'gmail'} width={'30px'} height="30" viewBox={'0 0 30 30'}/>
                        </IconContainer>
                    </SocialWrapper>

                    <SocialWrapper>
                        <BlockDescription>More projects I’ve worked on</BlockDescription>
                        <IconTextContainer>
                            <Icon src={iconsSocialSprite} iconId={'gitHub'} width={'30px'} height="30" viewBox={'0 0 30 30'}/>
                            <Text> @<a href={'#'}>john-doe</a> on github</Text>
                        </IconTextContainer>
                    </SocialWrapper>


                </FlexWrapper>

            </Container>

        </SFooter>
    );
};

const SFooter = styled.footer`
    height: 444px;
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;

`
const BlockDescription = styled.p`
    color: white;
`

const SocialWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`


const IconContainer = styled.div`
display: flex;
    justify-content: space-between;
    
    align-items: center;
    gap: 65px;
    margin-top: 34px;
    
`

const IconTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
//    
`

const Text = styled.span`
    margin-left: 22px;
    color: white;
    
    a{
        color: #0ac9bd;
    }
`

