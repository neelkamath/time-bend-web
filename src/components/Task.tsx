import React, {ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module.
import {Grid, GridCell} from '@rmwc/grid';
import styled from 'styled-components';
import {TaskData} from '../storage';
import {Duration} from './Duration';
import {TaskGridCell} from './TaskGridCell';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/icon-button/dist/mdc.icon-button.css';
// @ts-ignore: Cannot find module.
import '@rmwc/icon/icon.css';
// @ts-ignore: Cannot find module.
import {Editor} from './Editor';

export interface OnUpdate {
    (): void
}

export interface TaskProps {
    readonly taskData: TaskData
    readonly onUpdate: OnUpdate
}

export function Task(props: TaskProps): ReactElement {
    const [checked, setChecked] = useState(props.taskData.completed);
    return (
        // @ts-ignore: Type 'number' is not assignable to type 'boolean'.
        <TaskGrid completed={props.taskData.completed ? 1 : 0}>
            <GridCell desktop={1} tablet={1} phone={1}>
                <Editor checked={checked} setChecked={setChecked} {...props}/>
            </GridCell>
            <StyledTaskGridCell desktop={10} tablet={6} phone={2}>
                {props.taskData.task}
            </StyledTaskGridCell>
            {
                // @ts-ignore: Property does not exist on type.
                <Duration duration={props.taskData.duration} desktop={1} tablet={1} phone={1}/>
            }
        </TaskGrid>
    );
}

interface TaskGridProps {
    readonly completed: boolean
}

function TaskGrid(props: TaskGridProps): ReactElement {
    return <StyledTaskGrid {...props}/>;
}

const StyledTaskGrid = styled(Grid)<TaskGridProps>`
    background-color: ${(props) => props.completed ? '#EEEEEE' : 'initial'};
    border-bottom: 0.05em solid #E3E3E3;
    color: ${(props) => props.completed ? '#A4A4A4' : 'initial'};
    filter: 
        brightness(${(props) => props.completed ? '0.75' : '1'}) 
        grayscale(${(props) => props.completed ? '1' : '0'});
    font-weight: bold;
    padding: 0;
    text-decoration: ${(props) => props.completed ? 'line-through' : 'initial'};
` as typeof TaskGrid;
const StyledTaskGridCell = styled(TaskGridCell)`
    margin-bottom: auto;
    margin-top: auto;
`;