import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justifyContent?: string
    alignItems?: string
    wrap?: string
    columnGap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'stretch'};
    height: 100%;
    
    ${(props) => props.columnGap ? `column-gap: ${props.columnGap}` : ''}
 `

