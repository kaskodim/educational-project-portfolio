import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../../../styles/Theme";
import {Button} from "../../../../../coponents/button/button";
import {Icon} from "../../../../../coponents/icon/Icon";
import arrow from './../../../../images/decorativeElements/arrow.svg'

type ProjectPropsType = {
    text: string
    src: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <SProject>
            <Image src={props.src} alt=''/>
            <Text>{props.text}</Text>
            <Button>
                <span>Learn More </span>
                <Icon src={arrow}
                      iconId={'arrow'}
                      width={'16px'}
                      height={'9px'}
                      viewBox={'0 0 16 9'}/>
            </Button>
        </SProject>
    );
};

const SProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Theme.colors.secondaryDark};
    width: 100%;
    padding-bottom: 12px;
    color: ${Theme.colors.font.lightFont};
    border: 3px solid;
    border-image: linear-gradient(0deg, ${Theme.colors.gradient.primaryGr.oneColor}, ${Theme.colors.gradient.primaryGr.twoColor}) 1;

    
    
    &:hover {

        //border: 3px solid;
        border-image: linear-gradient(0deg, ${Theme.colors.gradient.secondaryGr.oneColor}, ${Theme.colors.gradient.secondaryGr.twoColor}) 1;
    }
`

const Image = styled.img`

`

const Text = styled.p`
    margin: 20px auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    padding: 10px;

`
