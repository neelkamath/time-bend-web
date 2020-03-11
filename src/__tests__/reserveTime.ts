import {saveDayTimes} from '../ts/storage';
import getReserveTime from '../ts/reserveTime';
import {formatTime, Time} from '../ts/timeFormatter';

testReserve({
    dayStart: {hour: 5, minute: 0},
    dayEnd: {hour: 19, minute: 0},
    reserve: {hour: 14, minute: 0}
});
testReserve({
    dayStart: {hour: 19, minute: 0},
    dayEnd: {hour: 5, minute: 0},
    reserve: {hour: 10, minute: 0}
});
testReserve({
    dayStart: {hour: 5, minute: 15},
    dayEnd: {hour: 19, minute: 30},
    reserve: {hour: 14, minute: 15}
});
testReserve({
    dayStart: {hour: 5, minute: 30},
    dayEnd: {hour: 19, minute: 15},
    reserve: {hour: 13, minute: 45}
});
testReserve({
    dayStart: {hour: 19, minute: 15},
    dayEnd: {hour: 5, minute: 30},
    reserve: {hour: 10, minute: 15}
});
testReserve({
    dayStart: {hour: 19, minute: 30},
    dayEnd: {hour: 5, minute: 15},
    reserve: {hour: 9, minute: 45}
});

interface DayReserve {
    readonly dayStart: Time
    readonly dayEnd: Time
    readonly reserve: Time
}

function testReserve(dayReserve: DayReserve): void {
    const start = formatTime(dayReserve.dayStart);
    const end = formatTime(dayReserve.dayEnd);
    const reserve = formatTime(dayReserve.reserve);
    test(
        `calculates the reserve time between ${start} and ${end} to equal ${reserve}`,
        () => testReserveTime(dayReserve.dayStart, dayReserve.dayEnd, dayReserve.reserve)
    );
}

function testReserveTime(dayStart: Time, dayEnd: Time, reserve: Time): void {
    saveDayTimes({dayStart, dayEnd});
    mockDate(dayStart.hour, dayStart.minute);
    expect(getReserveTime()).toEqual(reserve);
}

function mockDate(hour: number, minute: number): void {
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    Date.now = jest.fn(() => date.getTime());
}