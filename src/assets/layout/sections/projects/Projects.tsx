import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../coponents/SectionTitle";
import {Project} from "./projects/Project";
import project1 from './../../../images/project-1.png'
import project2 from './../../../images/project-2.png'
import project3 from './../../../images/project-3.png'

export const Projects = () => {
    return (
        <SProjects>
            <SectionTitle>Projects</SectionTitle>
            <Text>A select number of projects</Text>

            <ProjectsWrapper>
                <Project src={project1} text={'Made a social media manager template using HTML 5, CSS and JS.'}/>
                <Project src={project2} text={'Made a simple card page using HTML 5 and  CSS 3'}/>
                <Project src={project3} text={'Made an I.P address tracking website.'}/>
            </ProjectsWrapper>


        </SProjects>
    );
};

const SProjects = styled.section`
    background-color: burlywood;
    height: 75vh;
`

const Text = styled.h3`
text-align: center;
`


const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
   
`