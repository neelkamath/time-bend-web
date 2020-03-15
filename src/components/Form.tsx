import React, {ChangeEvent, Dispatch, ReactElement, SetStateAction, useState} from 'react';
import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {TextField} from '@rmwc/textfield';
import {CustomButton} from './CustomButton';
import {saveTask} from '../storage';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/theme/dist/mdc.theme.css';
// @ts-ignore: Cannot find module.
import {ThemeProvider} from '@rmwc/theme';

export default function Form(): ReactElement {
    const [task, setTask]: [string | undefined, Dispatch<SetStateAction<string | undefined>>] = useState();
    const [duration, setDuration]: [number | undefined, Dispatch<SetStateAction<number | undefined>>] = useState();
    return (
        <form>
            <DataInput setTask={setTask} setDuration={setDuration}/>
            <br/>
            <Submit task={task} duration={duration}/>
        </form>
    );
}

interface DataInputProps {
    setTask: Dispatch<SetStateAction<string | undefined>>
    setDuration: Dispatch<SetStateAction<number | undefined>>
}

function DataInput(props: DataInputProps): ReactElement {
    return (
        <ThemeProvider options={{primary: '#AFAFAF'}}>
            <TaskInput setInput={props.setTask}/>
            <br/>
            <br/>
            <DurationInput setInput={props.setDuration}/>
        </ThemeProvider>
    );
}

interface InputProps<T> {
    readonly setInput: Dispatch<SetStateAction<T | undefined>>
}

function TaskInput(props: InputProps<string>): ReactElement {
    return (
        <StyledTextField
            placeholder='Task'
            outlined
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.setInput(e.target.value)}
        />
    );
}

function DurationInput(props: InputProps<number>): ReactElement {
    return (
        <StyledTextField
            type='number'
            min='1'
            max='60'
            placeholder='Duration'
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.setInput(parseInt(e.target.value))}
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

interface SubmitProps {
    readonly task: string | undefined
    readonly duration: number | undefined
}

function Submit(props: SubmitProps): ReactElement {
    return (
        <CustomButton
            label='Create'
            onClick={
                () => {
                    if (props.task !== undefined && props.duration !== undefined)
                        saveTask({task: props.task, duration: props.duration, completed: false, created: Date.now()});
                }
            }
        />
    );
}