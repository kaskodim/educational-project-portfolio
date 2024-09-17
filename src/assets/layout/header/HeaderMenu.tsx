import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../coponents/icon/Icon";
import iconsSocial from '../../images/icon/iconsSocialSprite.svg'
import {FlexWrapper} from "../../../coponents/FlexWrapper";
import {Theme} from "../../../styles/Theme";

export const HeaderMenu = () => {
    return (
        <SHeaderMenu>
            <ul>
                <li><a href="">Skills</a></li>

                <li>
                    <a href="">
                        <FlexWrapper columnGap={'8px'}>
                            <Icon src={iconsSocial}
                                  iconId={'gears'}
                                  width={'24px'}
                                  height={'20px'}
                                  viewBox={'0 0 24 24'}
                                  fill={'green'}></Icon>

                            <span>Projects</span>
                        </FlexWrapper>
                    </a>
                </li>

                <li><a href="">Contact me</a></li>
            </ul>
        </SHeaderMenu>
    );
};

const SHeaderMenu = styled.nav`

    ul {
        display: flex;
        gap: 40px;
        
        a {
            font-size: 18px;
            line-height: 26px;
            color: ${Theme.colors.font.darkFont}
        }
    }
    
`