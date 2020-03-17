import DayTime from './DayTime';
import * as React from 'react';
import {ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module.
import {Grid, GridCell} from '@rmwc/grid';
import ReserveTime from './ReserveTime';
import getReserveTime from '../reserveTime';
import styled from 'styled-components';

export default function (): ReactElement {
    const reserveTime = getReserveTime();
    const [reserveHour, setReserveHour] = useState(reserveTime.hour);
    const [reserveMinute, setReserveMinute] = useState(reserveTime.minute);
    setInterval(() => updateReserveTime(setReserveHour, setReserveMinute), 1000);
    return (
        <StyledGrid>
            <GridCell desktop={3} tablet={2} phone={1}>
                <DayTime isStart={true} onUpdate={() => updateReserveTime(setReserveHour, setReserveMinute)}/>
            </GridCell>
            <GridCell desktop={6} tablet={4} phone={2}>
                <ReserveTime hour={reserveHour} minute={reserveMinute}/>
            </GridCell>
            <GridCell desktop={3} tablet={2} phone={1}>
                <DayTime isStart={false} onUpdate={() => updateReserveTime(setReserveHour, setReserveMinute)}/>
            </GridCell>
        </StyledGrid>
    );
}

const StyledGrid = styled(Grid)`
    background: linear-gradient(#58626E, #333539);
    text-align: center;
    font-weight: bold;
` as typeof Grid;

interface TimeSetter {
    (time: number): void
}

function updateReserveTime(setHour: TimeSetter, setMinute: TimeSetter): void {
    const time = getReserveTime();
    setHour(time.hour);
    setMinute(time.minute);
}