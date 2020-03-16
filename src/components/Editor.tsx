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

export default function Editor(props: EditorProps): ReactElement {
    const [checked, setChecked] = useState(props.taskData.completed);
    return (
        <GridInner>
            {
                // @ts-ignore: Property does not exist on type.
                <Status desktop={6} tablet={4} phone={2} {...{checked, setChecked, ...props}}/>
            }
            <GridCell desktop={6} tablet={4} phone={2}>
                <StyledIconButton 
                    label='Edit' 
                    icon={editIcon} 
                    onClick={(e) => {
                        if(props.taskData.completed){
                            props.setOpen(false);
                            // e.target.classList.remove('mdc-icon-button');
                            e.target.style.zIndex="-1";
                        }else{
                            props.setOpen(true);
                        }
                    }}
                    ripple={false}
                />
            </GridCell>
        </GridInner>
    );
}

const StyledIconButton = styled(IconButton)`
    margin-left: 0.375em;
    align-items: center;
    padding: 25px;
    border-radius: 50%;
    border: none;
    outline: none;
    position: relative;
    margin-top: 0.30em;
    margin-bottom: 0.30em;
` as typeof IconButton;