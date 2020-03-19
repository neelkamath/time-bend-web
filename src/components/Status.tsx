import React, {ChangeEvent, ReactElement} from 'react';
import {updateTask} from '../storage';
import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {Checkbox} from '@rmwc/checkbox';
// @ts-ignore: Cannot find module.
import {GridCellProps} from '@rmwc/grid';
import {EditorProps} from './Editor';

export interface StatusProps extends GridCellProps, EditorProps {
    readonly checked: boolean
    readonly setChecked: (open: boolean) => void
}

export default function Status(props: StatusProps): ReactElement {
    return (
        <StyledCheckbox
            checked={props.checked}
            // @ts-ignore: Property does not exist on type.
            desktop={props.desktop}
            // @ts-ignore: Property does not exist on type.
            tablet={props.tablet}
            // @ts-ignore: Property does not exist on type.
            phone={props.phone}
            onChange={
                (e: ChangeEvent<HTMLInputElement>) => {
                    const checked = e.target.checked;
                    props.setChecked(checked);
                    updateTask({...props.taskData, completed: checked});
                    props.onUpdate();
                }
            }
        />
    );
}

const StyledCheckbox = styled(Checkbox)`
    margin: auto;
` as unknown as typeof Checkbox;