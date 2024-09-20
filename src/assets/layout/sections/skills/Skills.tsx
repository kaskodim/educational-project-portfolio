import React from 'react';
import styled from "styled-components";
import skillImg from './../../../images/skills-image.png';
import {SectionTitle} from "../../../../coponents/SectionTitle";
import {Container} from "../../../../coponents/Container";
import {Theme} from "../../../../styles/Theme";
import {Skill} from "./Skill";


export const Skills = () => {

    return (
        <SSkills>
            <Container>

                <SectionTitle>Skills</SectionTitle>
                <Wrapper>
                    <WrapperSkills>
                        <SkillsText>I have a vast experience in the following web technologies:</SkillsText>
                        <WrapperIcon>
                            <Skill iconId={'html5'} text={'HTML5'}/>
                            <Skill iconId={'css3'} text={'CCS3'}/>
                            <Skill iconId={'js'} text={'JavaScript'}/>
                            <Skill iconId={'bootstrap'} text={'Bootstrap'}/>
                        </WrapperIcon>

                    </WrapperSkills>

                    <Photo src={skillImg} alt='skillImg'/>
                </Wrapper>
            </Container>
        </SSkills>
    );
};

const SSkills = styled.div`
    height: 474px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const WrapperSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid blue;

`

const SkillsText = styled.h4`
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: ${Theme.colors.font.serviceFont};
`

const WrapperIcon = styled.div`
    display: flex;
    flex-direction: row;
    gap: 44px;
    margin-top: 30px;
    padding:  0 6px;
`

const Photo = styled.img`
    min-height: 414px;
`
