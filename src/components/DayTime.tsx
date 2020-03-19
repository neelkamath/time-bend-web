import * as React from 'react';
import {ChangeEvent, Dispatch, ReactElement, SetStateAction, useState} from 'react';
// @ts-ignore: Cannot find module.
import {FormField} from '@rmwc/formfield';
import {getEndTime, getStartTime, saveEndTime, saveStartTime} from '../storage';
import {formatTime, Time} from '../timeFormatter';
import styled from 'styled-components';

export interface DayTimeProps {
    /** `true` if it's the start time, `false` if it's the end time. */
    readonly isStart: boolean
    readonly onUpdate: () => void
}

/** Saves the time to `localStorage` when updated. */
export default function DayTime(props: DayTimeProps): ReactElement {
    const [dayTime, setDayTime] = useState(getTimeOfDay(props.isStart));
    return (
        <StyledFormField>
            <label>
                <TimeInput dayTime={dayTime} setDayTime={setDayTime} {...props}/>
                <br/>
                <Span>
                    day {props.isStart ? 'start' : 'end'}
                </Span>
            </label>
        </StyledFormField>
    );
}

const StyledFormField = styled(FormField)`
    @media only screen and (min-width: 768px) {
        margin-top: 0;
    }
    margin-top: 0.3em;
` as typeof FormField;

interface TimeInputProps extends DayTimeProps {
    readonly dayTime: string
    readonly setDayTime: Dispatch<SetStateAction<string>>
}

function TimeInput(props: TimeInputProps): ReactElement {
    return (
        <Input
            onChange={
                (event: ChangeEvent<HTMLInputElement>) => {
                    const time = parseTime(event);
                    if (isNaN(time.hour) || isNaN(time.minute)) return;
                    props.isStart ? saveStartTime(time) : saveEndTime(time);
                    props.setDayTime(getTimeOfDay(props.isStart));
                    props.onUpdate();
                }
            }
            type='time'
            value={props.dayTime}
        />
    );
}

const dayTimeColor = '#989C9C';

const Input = styled.input`
    @media only screen and (min-width: 768px) {
        font-size: x-large;
    }
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: ${dayTimeColor};
    font-size: 1.1em;
    font-weight: bold;
    outline: none;
    padding-top: 0.2em;
    white-space: nowrap;
`;

function parseTime(event: ChangeEvent<HTMLInputElement>): Time {
    const values = event.target.value.split(':');
    return {hour: parseInt(values[0]), minute: parseInt(values[1])};
}

function getTimeOfDay(isStart: boolean): string {
    return formatTime(isStart ? getStartTime() : getEndTime());
}

const Span = styled.span`
    @media only screen and (min-width: 768px) {
        padding-right: 2.5em;
    }
    color: ${dayTimeColor};
    font-weight: bold;
    padding-right: 0.9em;
`;