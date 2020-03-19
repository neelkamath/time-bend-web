import React, {ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module.
import {GridCell, GridInner} from '@rmwc/grid';
import Status from './Status';
// @ts-ignore: Cannot find module.
import editIcon from '../../public/edit.svg';
import {TaskProps} from './Task';
import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {Button} from '@rmwc/button';

export interface EditorProps extends TaskProps {
    readonly setOpen: (open: boolean) => void
}

export default function Editor(props: EditorProps): ReactElement {
    const [checked, setChecked] = useState(props.taskData.completed);
    return (
        <GridInner>
            <StyledGridCell desktop={12} tablet={8} phone={4}>
                {
                    // @ts-ignore: Property does not exist on type.
                    <Status desktop={6} tablet={4} phone={2} {...{checked, setChecked, ...props}}/>
                }
                <StyledButton
                    desktop={6}
                    tablet={4}
                    phone={2}
                    aria-label='Edit'
                    icon={editIcon}
                    onClick={() => props.setOpen(true)}
                />
            </StyledGridCell>
        </GridInner>
    );
}

const StyledGridCell = styled(GridCell)`
    display: flex;
` as typeof GridCell;

const StyledButton = styled(Button)`
    @media only screen and (min-width: 768px) {
        padding-right: 1.5em;
    }
    position: absolute;
    left: 2.35rem;
    margin-top: 0.2em;
` as typeof Button;