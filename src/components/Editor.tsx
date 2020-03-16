import React, {ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module.
import {GridCell, GridInner} from '@rmwc/grid';
import Status from './Status';
// @ts-ignore: Cannot find module.
import editIcon from '../../public/edit.svg';
import {TaskProps} from './Task';
import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {IconButton} from '@rmwc/icon-button';
import {TaskData} from '../storage';

export interface EditorProps extends TaskProps {
    readonly taskData: TaskData
    readonly setOpen: (open: boolean) => void
}

export default function (props: EditorProps): ReactElement {
    const [checked, setChecked] = useState(props.taskData.completed);
    return (
        <GridInner>
            {
                // @ts-ignore: Property does not exist on type.
                <Status desktop={6} tablet={4} phone={2} {...{checked, setChecked, ...props}}/>
            }
            <GridCell desktop={6} tablet={4} phone={2}>
                <StyledIconButton label='Edit' icon={editIcon} onClick={() => props.setOpen(true)}/>
            </GridCell>
        </GridInner>
    );
}

const StyledIconButton = styled(IconButton)`
    margin-left: 0.375em;
` as typeof IconButton;