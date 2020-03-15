import React, {ChangeEvent, Dispatch, ReactElement, SetStateAction} from 'react';
import {updateTask} from '../storage';
import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {Checkbox} from '@rmwc/checkbox';
import {TaskProps} from './Task';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/form-field/dist/mdc.form-field.css';
// @ts-ignore: Cannot find module.
import {GridCell} from '@rmwc/grid';

export interface StatusProps extends TaskProps {
    readonly checked: boolean
    readonly setChecked: Dispatch<SetStateAction<boolean>>
}

export function Status(props: StatusProps): ReactElement {
    return (
        <GridCell desktop={1} tablet={1} phone={1}>
            <StyledCheckbox
                checked={props.checked}
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => {
                        const checked = e.target.checked;
                        props.setChecked(checked);
                        updateTask({...props.taskData, completed: checked});
                        props.onUpdate();
                    }
                }
            />
        </GridCell>
    );
}

const StyledCheckbox = styled(Checkbox)`
    margin: auto;
` as unknown as typeof Checkbox;