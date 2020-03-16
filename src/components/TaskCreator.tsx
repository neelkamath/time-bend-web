import React, {ReactElement, useState} from 'react';
import CustomButton from './CustomButton';
// @ts-ignore: Cannot find module.
import Form from './Form';
import CustomDialog from './CustomDialog';

export default function TaskCreator(): ReactElement {
    const [open, setOpen] = useState(false);
    return (
        <>
            <CustomDialog open={open} setOpen={setOpen}>
                <Form/>
            </CustomDialog>
            <CustomButton label='↓ new task' onClick={() => setOpen(true)}/>
        </>
    );
}