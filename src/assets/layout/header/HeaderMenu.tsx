import React from 'react';
import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

type MenuItemPropsType = {
    text: string;
    href: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type HeaderMenuProps = {
    menuItems: MenuItemPropsType[];
};

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ menuItems }) => {
    return (
        <SHeaderMenu>
            <ul>
                {menuItems.map((item, index) => (
                    <ListItem key={index}>
                        <Link href={item.href}>
                            {item.icon && (
                                <IconTextWrapper>
                                    <item.icon />
                                    <span>{item.text}</span>
                                </IconTextWrapper>
                            )}
                            {!item.icon && <span>{item.text}</span>}
                        </Link>
                    </ListItem>
                ))}
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
            color: ${Theme.colors.font.darkFont};
        
        }
    }
`

const IconTextWrapper = styled.div`
    display: flex;
    gap: 8px;
    
    svg {
        fill: ${Theme.colors.font.darkFont};
    }
`

const ListItem = styled.li`
    :hover{
        color: ${Theme.colors.font.secondaryFont};
        
        svg{
            fill: ${Theme.colors.font.secondaryFont};
        }
    }
`

const Link = styled.a`
    
`