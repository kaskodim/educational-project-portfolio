import React from 'react';
import styled from "styled-components";

type ProjectPropsType = {
    text: string
    src: string
}



export const Project = (props: ProjectPropsType) => {
    return (
        <SProject>
            <Image src={props.src} alt=''/>
            <Text>{props.text}</Text>
            <BtnProject>Learn More</BtnProject>
        </SProject>
    );
};

const SProject = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(38, 44, 77, 1);
    border: 1px solid red;
    width: 380px;
    height: 430px;
`

const Image = styled.img`

`

const Text = styled.p`
color: white;
`

const BtnProject = styled.button`
width: 100px;
`