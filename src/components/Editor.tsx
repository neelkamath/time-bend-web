import React, {Dispatch, ReactElement, SetStateAction} from 'react';
// @ts-ignore: Cannot find module.
import {GridCell, GridInner} from '@rmwc/grid';
import {Status} from './Status';
// @ts-ignore: Cannot find module.
import editIcon from '../../public/edit.svg';
import {TaskProps} from './Task';
import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {IconButton} from '@rmwc/icon-button';

export interface EditorProps extends TaskProps {
    readonly checked: boolean
    readonly setChecked: Dispatch<SetStateAction<boolean>>
}

export function Editor(props: EditorProps): ReactElement {
    return (
        <GridInner>
            {
                // @ts-ignore: Property does not exist on type.
                <Status desktop={6} tablet={4} phone={2} {...props}/>
            }
            <GridCell desktop={6} tablet={4} phone={2}>
                <StyledIconButton label='Edit' icon={editIcon}/>
            </GridCell>
        </GridInner>
    );
}

const StyledIconButton = styled(IconButton)`
    margin-left: 0.375em;
` as typeof IconButton;