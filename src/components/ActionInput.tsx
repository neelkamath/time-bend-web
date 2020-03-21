import React, {ChangeEvent, Dispatch, ReactElement, SetStateAction} from 'react';
import {CustomTextField} from './CustomTextField';

export interface ActionInputProps {
    readonly action?: string
    readonly setAction: Dispatch<SetStateAction<string | undefined>>
}

export default function ActionInput(props: ActionInputProps): ReactElement {
    return (
        <CustomTextField
            textarea
            rows={2}
            placeholder='Action'
            value={props.action === undefined ? '' : props.action}
            outlined
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.setAction(e.target.value)}
        />
    );
}