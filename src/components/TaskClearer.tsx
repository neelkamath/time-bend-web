import {default as React, Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import {SimpleDialog} from '@rmwc/dialog';
import CustomButton from './CustomButton';
import {deleteTasks} from '../storage';

export interface TaskClearerProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function TaskClearer(props: TaskClearerProps): ReactElement {
    return (
        <>
            <SimpleDialog
                title='Delete all tasks?'
                acceptLabel={null}
                cancelLabel={null}
                open={props.open}
                onClose={() => props.setOpen(false)}
                body={<CustomButton label='delete' onClick={() => clear(props.setOpen)}/>}
            />
            <CustomButton label='clear' onClick={() => props.setOpen(true)}/>
        </>
    );
}

function clear(setOpen: Dispatch<SetStateAction<boolean>>): void {
    deleteTasks();
    setOpen(false);
}