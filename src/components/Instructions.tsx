import {default as React, Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import CustomButton from './CustomButton';
import Explanation from './Explanation';
import CustomDialog from './CustomDialog';

export interface InstructionsProps {
    readonly open: boolean
    readonly setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Instructions(props: InstructionsProps): ReactElement {
    return (
        <>
            <CustomDialog open={props.open} setOpen={props.setOpen}>
                <Explanation/>
            </CustomDialog>
            <CustomButton label='instructions' onClick={() => props.setOpen(true)}/>
        </>
    );
}