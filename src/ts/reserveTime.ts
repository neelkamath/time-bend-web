import {Time} from './timeFormatter';
import {getEndHour, getEndMinute, getStartHour, getStartMinute} from './storage';

export default function getReserveTime(): Time {
    const reserveMinutes = getReserveMinutes();
    const hour = Math.floor(reserveMinutes / 60);
    const minute = reserveMinutes - (hour * 60);
    return {hour, minute: Math.floor(minute)};
}

function getReserveMinutes(): number {
    let start = getStartTime();
    const end = getEndTime();
    const now = Date.now();
    if (now > start && now < end) start = now;
    return getTimeBetween(start, end) / 1000 / 60;
}

function getTimeBetween(start: number, end: number): number {
    const milliseconds = end - start;
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    return milliseconds > 0 ? milliseconds : oneDayInMilliseconds + milliseconds;
}

function getStartTime(): number {
    const date = new Date();
    date.setHours(getStartHour());
    date.setMinutes(getStartMinute());
    return date.getTime();
}

function getEndTime(): number {
    const date = new Date();
    date.setHours(getEndHour());
    date.setMinutes(getEndMinute());
    return date.getTime();
}