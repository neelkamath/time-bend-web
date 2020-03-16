import {TaskData} from '../storage';
import React, {Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import Form from './Form';
import CustomDialog from './CustomDialog';
import {OnUpdate} from './App';

export interface EditorDialogProps {
    readonly open: boolean
    readonly setOpen: Dispatch<SetStateAction<boolean>>
    readonly taskData: TaskData
    readonly onUpdate: OnUpdate
}

export default function EditorDialog(props: EditorDialogProps): ReactElement {
    return (
        <CustomDialog open={props.open} setOpen={props.setOpen}>
            <Form
                onSubmit={
                    () => {
                        props.setOpen(false);
                        props.onUpdate();
                    }
                }
                taskData={props.taskData}
            />
        </CustomDialog>
    );
}