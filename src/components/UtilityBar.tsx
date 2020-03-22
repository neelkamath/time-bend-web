import {default as React, ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import {Grid, GridCell} from '@rmwc/grid';
import Instructions from './Instructions';
import styled from 'styled-components';
import {OnUpdate} from './App';
import TaskClearer from './TaskClearer';

export interface UtilityBarProps {
    readonly onTasksCleared: OnUpdate
}

export default function UtilityBar(props: UtilityBarProps): ReactElement {
    return (
        <StyledGrid>
            <GridCell desktop={2} tablet={2} phone={2}>
                <Instructions/>
            </GridCell>
            <GridCell desktop={9} tablet={5} phone={1}/>
            <GridCell desktop={1} tablet={1} phone={1}>
                <TaskClearer onClear={props.onTasksCleared}/>
            </GridCell>
        </StyledGrid>
    );
}

const StyledGrid = styled(Grid)`
    padding: 0;
` as typeof Grid;