import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {Button} from '@rmwc/button';
import React, {ReactElement} from 'react';
import '@material/button/dist/mdc.button.css';

export interface CustomButtonProps {
    label: string
    onClick: () => void
}

export function CustomButton(props: CustomButtonProps): ReactElement {
    return <StyledButton {...props} outlined/>
}

const StyledButton = styled(Button)`
    background-color: #E7E7E7 !important;
    color: #999999 !important;
    text-transform: lowercase;
    width: 100%;
` as typeof Button;