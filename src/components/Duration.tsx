import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {TaskGridCell} from './TaskGridCell';

export interface DurationProps {
    /** The task's duration. */
    duration: number
}

export function Duration(props: DurationProps): ReactElement {
    return (
        // @ts-ignore: Property 'duration' does not exist on type
        <StyledGridCell duration={props.duration} desktop={1} tablet={1} phone={1}>
            <DurationSpan>
                {props.duration === 60 ? '1h' : `${props.duration}m`}
            </DurationSpan>
        </StyledGridCell>
    );
}

interface StyledGridCellProps {
    readonly duration: number
}

const StyledGridCell = styled(TaskGridCell)<StyledGridCellProps>`
    background-color: ${(props) => colorDuration(props.duration)};
    color: #585C5D;
    display: flex;
    text-align: center;
` as typeof TaskGridCell;
const DurationSpan = styled.span`
    margin: auto;
`;

function colorDuration(duration: number): string {
    if (duration <= 15) return '#F1F6F8';
    if (duration <= 30) return '#E5F0F3';
    if (duration <= 45) return '#DAE7EA';
    return '#CBDDE2';
}