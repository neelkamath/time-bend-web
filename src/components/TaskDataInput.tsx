import React, {ChangeEvent, Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import {ThemeProvider} from '@rmwc/theme';
import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {TextField} from '@rmwc/textfield';

export interface TaskDataInputProps {
    readonly setAction: Dispatch<SetStateAction<string | undefined>>
    readonly setDuration: Dispatch<SetStateAction<number | undefined>>
    readonly action?: string
    readonly duration?: number
}

export default function TaskDataInput(props: TaskDataInputProps): ReactElement {
    return (
        <ThemeProvider options={{primary: '#AFAFAF'}}>
            <TaskInput action={props.action} setAction={props.setAction}/>
            <br/>
            <br/>
            <DurationInput duration={props.duration} setDuration={props.setDuration}/>
        </ThemeProvider>
    );
}

interface TaskInputProps {
    readonly action?: string
    readonly setAction: Dispatch<SetStateAction<string | undefined>>
}

function TaskInput(props: TaskInputProps): ReactElement {
    return (
        <StyledTextField
            placeholder='Task'
            value={props.action === undefined ? '' : props.action}
            outlined
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.setAction(e.target.value)}
        />
    );
}

interface DurationInputProps {
    readonly duration?: number
    readonly setDuration: Dispatch<SetStateAction<number | undefined>>
}

function DurationInput(props: DurationInputProps): ReactElement {
    return (
        <StyledTextField
            type='number'
            value={props.duration === undefined ? '' : props.duration}
            min='1'
            max='60'
            placeholder='Duration'
            onChange={
                (e: ChangeEvent<HTMLInputElement>) => {
                    const value = parseInt(e.target.value);
                    props.setDuration(isNaN(value) ? undefined : value);
                }
            }
            outlined
            required
        />
    );
}

/*
    We need to manually set the width to 100% because the fullwidth property of TextFields are broken. See
    https://github.com/jamesmfriedman/rmwc/issues/530.
 */
const StyledTextField = styled(TextField)`
    width: 100%;
` as unknown as typeof TextField;