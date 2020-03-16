import {default as React, Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import CustomButton from './CustomButton';
import {deleteTasks} from '../storage';
import CustomDialog from './CustomDialog';

export interface TaskClearerProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function TaskClearer(props: TaskClearerProps): ReactElement {
    return (
        <>
            <CustomDialog title='Delete all tasks?' open={props.open} setOpen={props.setOpen}>
                <CustomButton label='delete' onClick={() => clear(props.setOpen)}/>
            </CustomDialog>
            <CustomButton label='clear' onClick={() => props.setOpen(true)}/>
        </>
    );
}

function clear(setOpen: Dispatch<SetStateAction<boolean>>): void {
    deleteTasks();
    setOpen(false);
}