import styled, {css} from "styled-components";

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


/**
 *
 *
 * // const stylesForRed = css`
 * //     background: red;
 * //     border: 4px solid black;
 * // `
 * //
 * // const stylesForBlue = css`
 * //     background: blue;
 * //     border: 4px solid blue;
 * //
 * `<!---->
 *
 *     ${ (props) =>  props.columnGap === '4' ? stylesForRed : ''}
 *     ${ (props) =>  props.columnGap === '2' ? stylesForBlue : ''}
 */
