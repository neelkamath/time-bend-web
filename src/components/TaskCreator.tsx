import React, {ReactElement, useState} from 'react';
import CustomButton from './CustomButton';
// @ts-ignore: Cannot find module.
import {SimpleDialog} from '@rmwc/dialog';
import Form from './Form';

export default function (): ReactElement {
    const [open, setOpen] = useState(false);
    return (
        <>
            <SimpleDialog open={open} acceptLabel={null} cancelLabel={null} onClose={() => setOpen(false)}>
                <Form/>
            </SimpleDialog>
            <CustomButton label='↓ new task' onClick={() => setOpen(true)}/>
        </>
    );
}