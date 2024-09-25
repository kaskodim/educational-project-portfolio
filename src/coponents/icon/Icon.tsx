import React from 'react';



type iconPropsType = {
    src: string
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    className?: string
}



export const Icon = (props: iconPropsType) => {
    return (
            <svg className={props.className}
                xmlns="http://www.w3.org/2000/svg" width={props.width || "50"}
                height={props.height || "50"}
                viewBox={props.viewBox || "0 0 50 50"}
                fill={props.fill || "black"}>
                <use xlinkHref={`${props.src}#${props.iconId}`}></use>
            </svg>
    );
};

