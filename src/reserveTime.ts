import {Time} from './timeFormatter';
import {getEndHour, getEndMinute, getStartHour, getStartMinute, getTasks, TaskData} from './storage';

export default function getReserveTime(): Time {
    const reserveMinutes = getReserveMinutes();
    let hour = Math.floor(reserveMinutes / 60);
    let minute = reserveMinutes - (hour * 60);
    minute = Math.ceil(minute);
    if (minute === 60) {
        hour++;
        minute = 0;
    }
    return {hour, minute};
}

function getReserveMinutes(): number {
    const minutes = getMinutesFromNow();
    const duration = getTasks()
        .filter((value: TaskData) => !value.completed)
        .reduce((previous: number, current: TaskData) => previous + current.duration, 0);
    return minutes - duration;
}

function getMinutesFromNow(): number {
    let start = getMilliseconds(getStartHour(), getStartMinute());
    const end = getMilliseconds(getEndHour(), getEndMinute());
    const now = Date.now();
    if (now > start && now < end) start = now;
    return getMillisecondsBetween(start, end) / 1000 / 60;
}

function getMillisecondsBetween(start: number, end: number): number {
    const milliseconds = end - start;
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    return milliseconds > 0 ? milliseconds : oneDayInMilliseconds + milliseconds;
}

function getMilliseconds(hour: number, minute: number): number {
    const date = new Date();
    const second = 0;
    const millisecond = 0;
    date.setHours(hour, minute, second, millisecond);
    return date.getTime();
}