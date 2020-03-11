import {DayTime} from './DayTime';
import * as React from 'react';
import {ReactElement, useState} from 'react';
// @ts-ignore: Cannot find module
import {Grid, GridCell} from '@rmwc/grid';
import {ReserveTime} from './ReserveTime';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import getReserveTime from '../../reserveTime';

export default function TimeBar(): ReactElement {
    const reserveTime = getReserveTime();
    const [reserveHour, setReserveHour] = useState(reserveTime.hour);
    const [reserveMinute, setReserveMinute] = useState(reserveTime.minute);
    setInterval(() => updateReserveTime(setReserveHour, setReserveMinute), 60 * 1000);
    return <Grid
        style={{
            background: 'linear-gradient(#58626E, #333539)',
            textAlign: 'center',
            fontWeight: 'bold'
        }}
    >
        <GridCell span={4}>
            <DayTime isStart={true} onUpdate={() => updateReserveTime(setReserveHour, setReserveMinute)}/>
        </GridCell>
        <GridCell span={4}><ReserveTime hour={reserveHour} minute={reserveMinute}/></GridCell>
        <GridCell span={4}>
            <DayTime isStart={false} onUpdate={() => updateReserveTime(setReserveHour, setReserveMinute)}/>
        </GridCell>
    </Grid>;
}

interface TimeSetter {
    (time: number): void
}

function updateReserveTime(setHour: TimeSetter, setMinute: TimeSetter): void {
    const time = getReserveTime();
    setHour(time.hour);
    setMinute(time.minute);
}