import * as React from 'react';
import {ReactElement} from 'react';
import TimeBar from './TimeBar';
import TaskList from './TaskList';
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/icon-button/dist/mdc.icon-button.css';

export default function (): ReactElement {
    return (
        <>
            <TimeBar/>
            <TaskList/>
        </>
    );
}