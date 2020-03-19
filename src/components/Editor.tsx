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
            {
                // @ts-ignore: Property does not exist on type.
                <Status desktop={6} tablet={4} phone={2} {...{checked, setChecked, ...props}}/>
            }
            <GridCell desktop={6} tablet={4} phone={2}>
                <StyledButton onClick={() => props.setOpen(true)}>
                    <img alt='Edit' src={editIcon}/>
                </StyledButton>
            </GridCell>
        </GridInner>
    );
}

const StyledButton = styled(Button)`
    @media only screen and (min-width: 768px) {
        margin-left: 1.75em;
    }
    margin-left: 0.8em;
    margin-top: 0.25em;
` as typeof Button;