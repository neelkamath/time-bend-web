import {default as React, ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module.
import CustomButton from './CustomButton';
import Explanation from './Explanation';
import CustomDialog from './CustomDialog';

export default function Instructions(): ReactElement {
    const [open, setOpen] = useState(false);
    return (
        <>
            <CustomDialog open={open} setOpen={setOpen}>
                <Explanation/>
            </CustomDialog>
            <CustomButton label='instructions' onClick={() => setOpen(true)}/>
        </>
    );
}