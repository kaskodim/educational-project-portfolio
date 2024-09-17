import React from 'react';
import styled from "styled-components";
import skillImg from './../../../images/skills-image.png';
import {Icon} from "../../../../coponents/icon/Icon";
import {SectionTitle} from "../../../../coponents/SectionTitle";
import iconSkills from './../../../images/icon/iconsSkillsSprite.svg'





export const Skills = () => {
    return (
        <SSkills>
            <SectionTitle>Skills</SectionTitle>

            <Wrapper>
                <WrapperSkils>
                    <SkillsText>I have a vast experience in the following web technologies:</SkillsText>

                    <Icon src={iconSkills} iconId={'html5'} width={'50'} height={'50'}/>
                    <Icon src={iconSkills} iconId={'css3'} width={'50'} height={'50'}/>
                    <Icon src={iconSkills} iconId={'js'} width={'50'} height={'50'}/>
                    <Icon src={iconSkills} iconId={'bootstrap'} width={'50'} height={'50'}/>
                </WrapperSkils>

                <Photo src={skillImg} alt='skillImg'/>
            </Wrapper>
        </SSkills>
);
};





const SSkills = styled.div`
    background-color: aqua;
    height: 50vh;

`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

const WrapperSkils = styled.div`

`

const SkillsText = styled.h4`

`

const Photo = styled.img`
    width: 510px;
    height: 414px;
`
