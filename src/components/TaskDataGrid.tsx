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
    const children = (
        <>
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
        </>
    );
    return props.taskData.isComplete ? <CompletedTaskGrid children={children}/> : <TaskGrid children={children}/>;
}

const TaskGrid = styled(Grid)`
    border-bottom: 0.05em solid #E3E3E3;
    font-weight: bold;
    padding: 0;
` as typeof Grid;

const CompletedTaskGrid = styled(TaskGrid)`
    background-color: #EEEEEE;
    color: #A4A4A4;
    filter: brightness(75%) grayscale(100%);
    text-decoration: line-through;
` as typeof TaskGrid;

const StyledTaskGridCell = styled(TaskGridCell)`
    margin-bottom: auto;
    margin-top: auto;
` as typeof TaskGridCell;