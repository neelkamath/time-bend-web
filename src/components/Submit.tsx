import React, {ReactElement} from 'react';
import CustomButton from './CustomButton';
import {saveTask, updateTask} from '../storage';
import {FormProps} from './Form';

export interface SubmitProps extends FormProps {
    readonly action?: string
    readonly duration?: number
    readonly onSubmit: () => void
}

export default function Submit(props: SubmitProps): ReactElement {
    return (
        <CustomButton
            label={props.taskData === undefined ? 'create' : 'update'}
            onClick={
                (e: Event) => {
                    if (isInvalid(props.action, props.duration)) return;
                    storeTask(props);
                    props.onSubmit();
                    e.preventDefault();
                }
            }
        />
    );
}

function isInvalid(action?: string, duration?: number): boolean {
    return action === undefined || action === '' || duration === undefined || duration < 1 || duration > 60;
}

function storeTask(props: SubmitProps): void {
    if (props.action === undefined || props.duration === undefined) return;
    if (props.taskData === undefined)
        saveTask({action: props.action, duration: props.duration, completed: false});
    else
        updateTask({...props.taskData, action: props.action, duration: props.duration});
}