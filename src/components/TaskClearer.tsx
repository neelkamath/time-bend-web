import {default as React, Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import CustomButton from './CustomButton';
import {deleteTasks} from '../storage';
import CustomDialog from './CustomDialog';
import {OnUpdate} from './App';

export interface TaskClearerProps {
    readonly open: boolean
    readonly setOpen: Dispatch<SetStateAction<boolean>>
    readonly onClear: OnUpdate
}

export default function TaskClearer(props: TaskClearerProps): ReactElement {
    return (
        <>
            <CustomDialog title='Delete tasks?' open={props.open} setOpen={props.setOpen}>
                <CustomButton label='All' onClick={() => clear(props.setOpen, props.onClear)}/>
                <CustomButton label='Finished only' onClick={() => clear(props.setOpen, props.onClear)}/>
            </CustomDialog>
            <CustomButton label='clear' onClick={() => props.setOpen(true)}/>
        </>
    );
}

function clear(setOpen: Dispatch<SetStateAction<boolean>>, onClear: OnUpdate): void {
    deleteTasks();
    setOpen(false);
    onClear();
}