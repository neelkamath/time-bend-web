import * as React from 'react';
import {ReactElement, useState} from 'react';
import TimeBar from './TimeBar';
import TaskList from './TaskList';
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
// @ts-ignore: Cannot find module.
import {Grid, GridCell} from '@rmwc/grid';
// @ts-ignore: Cannot find module.
import TaskClearer from './TaskClearer';
import styled from 'styled-components';
import {getTasks} from '../storage';
import Instructions from './Instructions';

export interface OnUpdate {
    (): void
}

export default function (): ReactElement {
    const [tasks, setTasks] = useState(getTasks());
    const onUpdate = () => setTasks(getTasks());
    const [clearerOpen, clearerSetOpen] = useState(false);
    const [aboutOpen, aboutSetOpen] = useState(false);
    return (
        <>
            <TimeBar/>
            <StyledGrid>
                <GridCell desktop={2} tablet={2} phone={2}>
                    <Instructions open={aboutOpen} setOpen={aboutSetOpen}/>
                </GridCell>
                <GridCell desktop={9} tablet={5} phone={1}/>
                <GridCell desktop={1} tablet={1} phone={1}>
                    <TaskClearer onClear={onUpdate} open={clearerOpen} setOpen={clearerSetOpen}/>
                </GridCell>
            </StyledGrid>
            <TaskList onUpdate={onUpdate} tasks={tasks}/>
        </>
    );
}

const StyledGrid = styled(Grid)`
    padding: 0;
` as typeof Grid;