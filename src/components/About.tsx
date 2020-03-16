import {default as React, Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import {SimpleDialog} from '@rmwc/dialog';
import CustomButton from './CustomButton';
import Explanation from './Explanation';

export interface AboutProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function About(props: AboutProps): ReactElement {
    return (
        <>
            <SimpleDialog
                open={props.open}
                acceptLabel={null}
                cancelLabel={null}
                onClose={() => props.setOpen(false)}
                body={<Explanation/>}
            />
            <CustomButton label='instructions' onClick={() => props.setOpen(true)}/>
        </>
    );
}