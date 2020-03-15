import {TaskData} from '../storage';
import React, {ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import {SimpleDialog} from '@rmwc/dialog';
import Form from './Form';

export interface EditorDialogProps {
    readonly open: boolean
    readonly setOpen: (open: boolean) => void
    readonly taskData: TaskData
}

export default function EditorDialog(props: EditorDialogProps): ReactElement {
    return (
        <SimpleDialog
            open={props.open}
            acceptLabel={null}
            cancelLabel={null}
            onClose={() => props.setOpen(false)}
            body={<Form taskData={props.taskData}/>}
        />
    );
}