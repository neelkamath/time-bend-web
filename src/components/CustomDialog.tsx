import React, {Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import {SimpleDialog} from '@rmwc/dialog';

export interface CustomDialogProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    title?: string
    children: any
}

export default function CustomDialog(props: CustomDialogProps): ReactElement {
    return (
        <SimpleDialog
            title={props.title}
            acceptLabel={null}
            cancelLabel={null}
            open={props.open}
            onClose={() => props.setOpen(false)}
            body={{...props.children}}
        />
    );
}