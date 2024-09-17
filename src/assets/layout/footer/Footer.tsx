import React from 'react';
import styled from "styled-components";
import iconsSocialSprite from './../../images/icon/iconsSocialSprite.svg'
import {Icon} from "../../../coponents/icon/Icon";

export const Footer = () => {
    return (
        <SFooter>
            <SocialWrapper>
                <BlokDescription>My social media links:</BlokDescription>
                <IconConteiner>
                    <Icon src={iconsSocialSprite} iconId={'in'} width="30" height="30" viewBox={'0 0 30 30'}/>
                    <Icon src={iconsSocialSprite} iconId={'whatsapp'} width="30" height="30" viewBox={'0 0 30 30'}/>
                    <Icon src={iconsSocialSprite} iconId={'twitter'} width="30" height="30" viewBox={'0 0 30 30'}/>
                    <Icon src={iconsSocialSprite} iconId={'gmail'} width="30" height="30" viewBox={'0 0 30 30'}/>
                </IconConteiner>
            </SocialWrapper>

            <SocialWrapper>
                <BlokDescription>More projects I’ve worked on</BlokDescription>
                <IconConteiner>
                    <Icon src={iconsSocialSprite} iconId={'gitHub'} width="30" height="30" viewBox={'0 0 30 30'}/>

                   <span> @<a href={'#'}>john-doe</a> on github</span>
                </IconConteiner>

            </SocialWrapper>
        </SFooter>
    );
};

const SFooter = styled.footer`
    height: 75vh;
    background-color: burlywood;
    display: flex;
    justify-content: space-around;

`
const BlokDescription = styled.p`
    color: white;
`

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
`


const IconConteiner = styled.div`
    display: flex;
    gap:30px;

`

