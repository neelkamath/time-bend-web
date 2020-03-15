import * as React from 'react';
import {ReactElement} from 'react';
import {formatTimeUnit, Time} from '../timeFormatter';
import styled from 'styled-components';

export function ReserveTime(props: Time): ReactElement {
    return (
        <>
            <ValueSpan>
                {props.hour}:{formatTimeUnit(props.minute)}
            </ValueSpan>
            <br/>
            <LabelSpan>reserve left</LabelSpan>
        </>
    );
}

const ValueSpan = styled.span`
    @media only screen and (min-width: 768px) {
        font-size: 2.5em;
    }
    color: #99DB79;
    font-size: xx-large;
    font-weight: bold;
`;
const LabelSpan = styled.span`
    color: white;
`;