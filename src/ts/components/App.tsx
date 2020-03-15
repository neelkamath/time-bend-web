import * as React from 'react';
import {ReactElement} from 'react';
import TimeBar from './TimeBar';
import TaskList from './TaskList';

export default function App(): ReactElement {
    return (
        <>
            <TimeBar/>
            <TaskList/>
        </>
    );
}