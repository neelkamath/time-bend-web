import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {TextField} from '@rmwc/textfield';

/*
    We need to manually set the width to 100% because the fullwidth property of TextFields are broken. See
    https://github.com/jamesmfriedman/rmwc/issues/530.
 */
export const CustomTextField = styled(TextField)`
    width: 100%;
` as unknown as typeof TextField;