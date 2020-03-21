import React, {ReactElement, useState} from 'react';
import CustomButton from './CustomButton';
// @ts-ignore: Cannot find module.
import Form from './Form';
import CustomDialog from './CustomDialog';
import {OnUpdate} from './App';

export interface TaskCreatorProps {
    onUpdate: OnUpdate
}

export default function TaskCreator(props: TaskCreatorProps): ReactElement {
    const [open, setOpen] = useState(false);
    return (
        <>
            <CustomDialog open={open} setOpen={setOpen}>
                <Form
                    isNewTask
                    onSubmit={
                        () => {
                            setOpen(false);
                            props.onUpdate();
                        }
                    }
                />
            </CustomDialog>
            <CustomButton label='↓ new task' onClick={() => setOpen(true)}/>
        </>
    );
}