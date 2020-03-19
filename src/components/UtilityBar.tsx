import {default as React, ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module.
import {Grid, GridCell} from '@rmwc/grid';
import Instructions from './Instructions';
import TaskClearer from './TaskClearer';
import styled from 'styled-components';
import {OnUpdate} from './App';

export interface UtilityBarProps {
    readonly onTasksCleared: OnUpdate
}

export default function UtilityBar(props: UtilityBarProps): ReactElement {
    const [clearerOpen, clearerSetOpen] = useState(false);
    const [aboutOpen, aboutSetOpen] = useState(false);
    return (
        <StyledGrid>
            <GridCell desktop={2} tablet={2} phone={2}>
                <Instructions open={aboutOpen} setOpen={aboutSetOpen}/>
            </GridCell>
            <GridCell desktop={9} tablet={5} phone={1}/>
            <GridCell desktop={1} tablet={1} phone={1}>
                <TaskClearer onClear={props.onTasksCleared} open={clearerOpen} setOpen={clearerSetOpen}/>
            </GridCell>
        </StyledGrid>
    );
}

const StyledGrid = styled(Grid)`
    padding: 0;
` as typeof Grid;