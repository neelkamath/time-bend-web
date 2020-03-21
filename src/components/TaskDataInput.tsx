import React, {Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import {ThemeProvider} from '@rmwc/theme';
import ActionInput from './ActionInput';
import DurationInput from './DurationInput';

export interface TaskDataInputProps {
    readonly setAction: Dispatch<SetStateAction<string | undefined>>
    readonly setDuration: Dispatch<SetStateAction<number | undefined>>
    readonly action?: string
    readonly duration?: number
}

export default function TaskDataInput(props: TaskDataInputProps): ReactElement {
    return (
        <ThemeProvider options={{primary: '#AFAFAF'}}>
            <ActionInput action={props.action} setAction={props.setAction}/>
            <br/>
            <br/>
            <DurationInput duration={props.duration} setDuration={props.setDuration}/>
        </ThemeProvider>
    );
}