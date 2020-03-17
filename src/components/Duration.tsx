import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {TaskGridCell} from './TaskGridCell';
// @ts-ignore: Cannot find module.
import {GridCellProps} from '@rmwc/grid';

export interface DurationProps extends GridCellProps {
    /** The task's duration. */
    readonly duration: number
}

export default function (props: DurationProps): ReactElement {
    return (
        // @ts-ignore: Property 'duration' does not exist on type
        <DurationGridCell {...props}>
            <Span>
                {props.duration === 60 ? '1h' : `${props.duration}m`}
            </Span>
        </DurationGridCell>
    );
}

interface DurationGridCellProps {
    readonly duration: number
}

const DurationGridCell = styled(TaskGridCell)<DurationGridCellProps>`
    background-color: ${(props) => colorDuration(props.duration)};
    color: #585C5D;
    display: flex;
    text-align: center;
` as typeof TaskGridCell;

const Span = styled.span`
    margin: auto;
`;

function colorDuration(duration: number): string {
    if (duration <= 15) return '#F1F6F8';
    if (duration <= 30) return '#E5F0F3';
    if (duration <= 45) return '#DAE7EA';
    return '#CBDDE2';
}