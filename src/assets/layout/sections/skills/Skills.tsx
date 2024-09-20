import React from 'react';
import styled from "styled-components";
import skillImg from './../../../images/skills-image.png';
import {Icon} from "../../../../coponents/icon/Icon";
import {SectionTitle} from "../../../../coponents/SectionTitle";
import iconSkills from './../../../images/icon/iconsSkillsSprite.svg'
import {Container} from "../../../../coponents/Container";
import {Theme} from "../../../../styles/Theme";
import {ReactComponent as Border} from '../../../images/decorativeElements/border-skills.svg';


export const Skills = () => {

    return (
        <SSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>

                <Wrapper>
                    <WrapperSkills>
                        <SkillsText>I have a vast experience in the following web technologies:</SkillsText>
                        <WrapperIcon>

                            <WrapperSkill>
                                <WrapperBorder>
                                    <SBorder/>
                                    <SIcon src={iconSkills} iconId={'html5'} width={'50'} height={'50'}/>
                                </WrapperBorder>
                                <IconText>HTML5</IconText>
                            </WrapperSkill>


                            <WrapperSkill>
                                <WrapperBorder>
                                    <SBorder/>
                                    <SIcon src={iconSkills} iconId={'css3'} width={'50'} height={'50'}/>
                                </WrapperBorder>
                                <IconText>CSS3</IconText>
                            </WrapperSkill>


                            <WrapperSkill>
                                <WrapperBorder>
                                    <SBorder/>
                                    <SIcon src={iconSkills} iconId={'js'} width={'50'} height={'50'}/>
                                </WrapperBorder>
                                <IconText>JavaScript</IconText>
                            </WrapperSkill>


                            <WrapperSkill>
                                <WrapperBorder>
                                    <SBorder/>
                                    <SIcon src={iconSkills} iconId={'bootstrap'} width={'50'} height={'50'}/>
                                </WrapperBorder>
                                <IconText>Bootstrap</IconText>
                            </WrapperSkill>

                        </WrapperIcon>

                    </WrapperSkills>

                    <Photo src={skillImg} alt='skillImg'/>
                </Wrapper>
            </Container>
        </SSkills>
    );
};

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
`

const WrapperSkill = styled.div`


`

const WrapperBorder = styled.div`
    position: relative;
    margin-bottom: 4px;
`
const SIcon = styled(Icon)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`

const IconText = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 29px;
`

const SBorder = styled(Border)`
    stop {
        transition: stop-color .5s ease-in-out;
    }

    stop:nth-child(1) {
        stop-color: #0D54BE;
    }

    stop:nth-child(2) {
        stop-color: #20ECD3;
    }


    &:hover {
        border: 1px solid green;
        stop:nth-child(1) {
            stop-color: red;
        }

        stop:nth-child(2) {
            stop-color: yellow;
        }
    }

`

const SSkills = styled.div`
    height: 50vh;
`

const Photo = styled.img`
    width: 510px;
    height: 414px;
`
