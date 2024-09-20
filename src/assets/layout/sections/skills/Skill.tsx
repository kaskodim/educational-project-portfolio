import React from 'react';
import iconSkills from "../../../images/icon/iconsSkillsSprite.svg";
import styled from "styled-components";
import {Icon} from "../../../../coponents/icon/Icon";
import {ReactComponent as BorderSvg} from '../../../images/decorativeElements/border-skills.svg'
import {Theme} from "../../../../styles/Theme";


type SkillsPropsType = {
    iconId: string
    text: string
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <WrapperSkill>
            <WrapperBorder>
                <BorderSvg/>
                <SIcon src={iconSkills} iconId={props.iconId} width={'50'} height={'50'}/>
            </WrapperBorder>
            <IconText>{props.text}</IconText>
        </WrapperSkill>

    );
};

const WrapperSkill = styled.div`

`

const WrapperBorder = styled.div`
    position: relative;
    margin-bottom: 4px;
    transition: all .3s ease-in-out;

    #primaryGradient > stop {
        &:first-child {
            stop-color: ${Theme.colors.gradient.primaryGr.oneColor};
        }

        &:last-child {
            stop-color: ${Theme.colors.gradient.primaryGr.twoColor};

        }
    }

    #secondaryGradient > stop {
        &:first-child {
            stop-color: ${Theme.colors.gradient.secondaryGr.oneColor};
        }

        &:last-child {
            stop-color: ${Theme.colors.gradient.secondaryGr.twoColor};
        }
    }

    path {
        stroke: url(#primaryGradient)
    }

    &:hover {
        path {
            stroke: url(#secondaryGradient);
        }
    }
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