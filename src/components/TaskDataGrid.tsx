import React, {Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import {Grid, GridCell} from '@rmwc/grid';
import Editor from './Editor';
import Duration from './Duration';
import {TaskProps} from './Task';
import styled from 'styled-components';
import {TaskGridCell} from './TaskGridCell';

export interface TaskDataGridProps extends TaskProps {
    readonly setOpen: Dispatch<SetStateAction<boolean>>
}

export default function TaskDataGrid(props: TaskDataGridProps): ReactElement {
    return (
        // @ts-ignore: Type 'number' is not assignable to type 'boolean'.
        <StyledGrid completed={props.taskData.completed ? 1 : 0}>
            <GridCell desktop={1} tablet={1} phone={1} align='middle'>
                <Editor setOpen={props.setOpen} {...props}/>
            </GridCell>
            <StyledTaskGridCell desktop={10} tablet={6} phone={2}>
                {props.taskData.action}
            </StyledTaskGridCell>
            {
                // @ts-ignore: Property does not exist on type.
                <Duration duration={props.taskData.duration} desktop={1} tablet={1} phone={1}/>
            }
        </StyledGrid>
    );
}

interface TaskGridProps {
    readonly completed: boolean
}

const StyledGrid = styled(Grid)<TaskGridProps>`
    background-color: ${(props) => props.completed ? '#EEEEEE' : 'initial'};
    border-bottom: 0.05em solid #E3E3E3;
    color: ${(props) => props.completed ? '#A4A4A4' : 'initial'};
    filter: 
        brightness(${(props) => props.completed ? '0.75' : '1'}) 
        grayscale(${(props) => props.completed ? '1' : '0'});
    font-weight: bold;
    padding: 0;
    text-decoration: ${(props) => props.completed ? 'line-through' : 'initial'};
` as typeof Grid;

const StyledTaskGridCell = styled(TaskGridCell)`
    margin-bottom: auto;
    margin-top: auto;
` as typeof TaskGridCell;