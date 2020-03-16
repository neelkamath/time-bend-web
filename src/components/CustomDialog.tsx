import React, {Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import {SimpleDialog} from '@rmwc/dialog';

export interface CustomDialogProps {
    readonly open: boolean
    readonly setOpen: Dispatch<SetStateAction<boolean>>
    readonly title?: string
    readonly children: React.ReactNode
}

export default function CustomDialog(props: CustomDialogProps): ReactElement {
    return (
        <SimpleDialog
            title={props.title}
            acceptLabel={null}
            cancelLabel={null}
            open={props.open}
            onClose={() => props.setOpen(false)}
            body={props.children}
        />
    );
}