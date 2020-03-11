import {formatTime, formatTimeUnit} from '../ts/timeFormatter';

test(
    'formats 3 hours and 4 minutes to equal 03:04',
    () => expect(formatTime({hour: 3, minute: 4})).toBe('03:04')
);
test(
    'formats 12 hours and 17 minutes to equal 12:17',
    () => expect(formatTime({hour: 12, minute: 17})).toBe('12:17')
);
test('formats 7 to 07', () => expect(formatTimeUnit(7)).toBe('07'));
test('formats 12 to 12', () => expect(formatTimeUnit(12)).toBe('12'));