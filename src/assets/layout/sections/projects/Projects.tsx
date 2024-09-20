import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../coponents/SectionTitle";
import {Project} from "./projects/Project";
import project1 from './../../../images/project-1.png'
import project2 from './../../../images/project-2.png'
import project3 from './../../../images/project-3.png'
import {Theme} from "../../../../styles/Theme";
import {Icon} from "../../../../coponents/icon/Icon";
import iconsSocial from "../../../images/icon/iconsSocialSprite.svg";
import {Container} from "../../../../coponents/Container";

export const Projects = () => {
    return (
        <SProjects>
            <Container>



                <SectionTitle>
                    <WrapperTitle>
                        <SIcon src={iconsSocial}
                               iconId={'gears'}
                               width={'26px'}
                               height={'24px'}
                               viewBox={'0 0 26 26'}
                               fill={'white'}></SIcon>
                        <Span>Projects</Span>
                    </WrapperTitle>
                </SectionTitle>
                <Text>A select number of projects</Text>

                <ProjectsWrapper>
                    <Project src={project1}
                             text={'Made a social media manager template using HTML 5, CSS and JS.'}/>
                    <Project src={project2}
                             text={'Made a simple card page using HTML 5 and  CSS 3'}/>
                    <Project src={project3}
                             text={'Made an I.P address tracking website.'}/>
                </ProjectsWrapper>




            </Container>
        </SProjects>
    );
};

const SProjects = styled.section`
    background-color: ${Theme.colors.secondary};
    color: ${Theme.colors.font.lightFont};
padding-bottom: 40px;


    h2 {
        color: ${Theme.colors.font.lightFont};
    }
`

const WrapperTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;

`

const SIcon = styled(Icon)`

`

const Span = styled.span`
    text-align: center;
    margin-left: 16px;
`


const Text = styled.h3`
    text-align: center;
    margin: 8px auto 24px;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;

`


const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 58px;

`