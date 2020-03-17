import React, {ReactElement} from 'react';
import CustomButton from './CustomButton';
import {saveTask, updateTask} from '../storage';
import {FormProps} from './Form';

export interface SubmitProps extends FormProps {
    readonly task?: string
    readonly duration?: number
    readonly onSubmit: () => void
}

export default function (props: SubmitProps): ReactElement {
    return (
        <CustomButton
            label={props.taskData === undefined ? 'create' : 'update'}
            onClick={
                (e: Event) => {
                    e.preventDefault();
                    storeTask(props);
                    props.onSubmit();
                }
            }
        />
    );
}

function storeTask(props: SubmitProps): void {
    if (props.task === undefined || props.duration === undefined) return;
    if (props.taskData === undefined)
        saveTask({task: props.task, duration: props.duration, completed: false, created: Date.now()});
    else
        updateTask({...props.taskData, task: props.task, duration: props.duration});
}