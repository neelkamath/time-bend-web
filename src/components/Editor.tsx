import React, {ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module.
import {GridCell, GridInner} from '@rmwc/grid';
import Status from './Status';
// @ts-ignore: Cannot find module.
import editIcon from '../../public/edit.svg';
import {TaskProps} from './Task';
import styled from 'styled-components';
import {TaskData} from '../storage';
// @ts-ignore: Cannot find module.
import {Button} from '@rmwc/button';

export interface EditorProps extends TaskProps {
    readonly taskData: TaskData
    readonly setOpen: (open: boolean) => void
}

export default function (props: EditorProps): ReactElement {
    const [checked, setChecked] = useState(props.taskData.completed);
    
    return (
        <GridInner>
            <StyledGridCell desktop={6} tablet={4} phone={2}>
                {
                    // @ts-ignore: Property does not exist on type.
                    <Status desktop={6} tablet={4} phone={2} {...{checked, setChecked, ...props}}/>
                }
                <StyledButton label='Edit' icon={editIcon} onClick={() => props.setOpen(true)} ripple={false}/>
            </StyledGridCell>
        </GridInner>
    );
}

const StyledGridCell = styled(GridCell)`
    padding-top: 0.234em;
    padding-bottom: 0.234em;
    display: flex;
` as typeof GridCell;

const StyledButton = styled(Button)`
    @media only screen and (min-width: 768px) {
        margin-left: 1.75em;
    }
    border: none;
    border-radius: 50%;
    outline: none;
` as typeof Button;
