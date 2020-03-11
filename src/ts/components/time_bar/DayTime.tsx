import * as React from 'react';
import {ChangeEvent, ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module
import {FormField} from '@rmwc/formfield';
import {getEndTime, getStartTime, saveEndTime, saveStartTime} from '../../storage';
import {formatTime, Time} from '../../timeFormatter';

export interface OnUpdateCallback {
    (): void
}

export interface DayTimeProps {
    /** `true` if it's the start time, `false` if it's the end time. */
    readonly isStart: boolean
    /** Gets called with the updated time. */
    readonly onUpdate: OnUpdateCallback
}

/** Saves the time to {@link localStorage} when updated. */
export function DayTime(props: DayTimeProps): ReactElement {
    const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay(props.isStart));
    return <FormField>
        <label style={{color: '#989C9C', paddingRight: '1.75em'}}>
            <input
                onChange={
                    (event: ChangeEvent<HTMLInputElement>) => {
                        const time = parseTime(event);
                        if (isNaN(time.hour) || isNaN(time.minute)) return;
                        props.isStart ? saveStartTime(time) : saveEndTime(time);
                        setTimeOfDay(getTimeOfDay(props.isStart));
                        props.onUpdate();
                    }
                }
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    border: 'none',
                    color: '#989C9C',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'x-large',
                    fontWeight: 'bold',
                    outline: 'none',
                    paddingTop: '0.2em'
                }}
                type="time"
                value={timeOfDay}
            />
            <br/>
            day {props.isStart ? 'start' : 'end'}
        </label>
    </FormField>;
}

function parseTime(event: ChangeEvent<HTMLInputElement>): Time {
    const values = event.target.value.split(':');
    return {hour: parseInt(values[0]), minute: parseInt(values[1])};
}

function getTimeOfDay(isStart: boolean): string {
    return isStart ? formatTime(getStartTime()) : formatTime(getEndTime());
}