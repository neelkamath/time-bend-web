import React, {ChangeEvent, Dispatch, ReactElement, SetStateAction} from 'react';
import {CustomTextField} from './CustomTextField';

export interface DurationInputProps {
    readonly duration?: number
    readonly setDuration: Dispatch<SetStateAction<number | undefined>>
}

export default function DurationInput(props: DurationInputProps): ReactElement {
    return (
        <CustomTextField
            type='number'
            value={props.duration === undefined ? '' : props.duration}
            min='1'
            max='60'
            placeholder='Duration'
            onChange={
                (e: ChangeEvent<HTMLInputElement>) => {
                    const value = parseInt(e.target.value);
                    props.setDuration(isNaN(value) ? undefined : value);
                }
            }
            outlined
            required
        />
    );
}