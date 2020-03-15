// @ts-ignore: Cannot find module.
import {SimpleDialog} from '@rmwc/dialog';
import React, {Dispatch, ReactElement, SetStateAction} from 'react';
import Form from './Form';
import '@material/dialog/dist/mdc.dialog.css';

export interface CreateTaskDialogProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export function CreateTaskDialog(props: CreateTaskDialogProps): ReactElement {
    return (
        <SimpleDialog open={props.open} acceptLabel={null} cancelLabel={null} onClose={() => props.setOpen(false)}>
            <Form/>
        </SimpleDialog>
    );
}