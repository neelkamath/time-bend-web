import * as React from 'react';
import {ReactElement} from 'react';
import {formatTimeUnit, Time} from '../../timeFormatter';

export function ReserveTime(props: Time): ReactElement {
    return <>
        <span style={{color: '#99DB79', fontSize: '2.5em', fontWeight: 'bold'}}>
            {props.hour}:{formatTimeUnit(props.minute)}
        </span>
        <br/>
        <span style={{color: 'white'}}>reserve left</span>
    </>;
}