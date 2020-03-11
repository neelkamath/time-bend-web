import {Time} from './timeFormatter';

export interface DayTimes {
    dayStart: Time
    dayEnd: Time
}

export function saveDayTimes(dayTimes: DayTimes): void {
    saveStartTime(dayTimes.dayStart);
    saveEndTime(dayTimes.dayEnd);
}

export function saveStartTime(time: Time): void {
    saveStartHour(time.hour);
    saveStartMinute(time.minute);
}

export function saveStartHour(hour: number): void {
    saveTime('startHour', hour);
}

export function saveStartMinute(minute: number): void {
    saveTime('startMinute', minute);
}

export function saveEndTime(time: Time): void {
    saveEndHour(time.hour);
    saveEndMinute(time.minute);
}

export function saveEndHour(hour: number,): void {
    saveTime('endHour', hour);
}

export function saveEndMinute(minute: number): void {
    saveTime('endMinute', minute);
}

function saveTime(key: string, time: number): void {
    localStorage.setItem(key, time.toString());
}

export function getStartTime(): Time {
    return {hour: getStartHour(), minute: getStartMinute()};
}

export function getStartHour(): number {
    return getTime('startHour');
}

export function getStartMinute(): number {
    return getTime('startMinute');
}

export function getEndTime(): Time {
    return {hour: getEndHour(), minute: getEndMinute()};
}

export function getEndHour(): number {
    return getTime('endHour');
}

export function getEndMinute(): number {
    return getTime('endMinute');
}

function getTime(key: string): number {
    const time = localStorage.getItem(key);
    return parseInt(time === null ? '0' : time);
}