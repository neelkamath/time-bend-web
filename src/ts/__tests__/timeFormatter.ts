import {formatTime, formatTimeUnit} from '../timeFormatter';

it('formats 7 hours and 13 minutes to 07:13', () => expect(formatTime({hour: 7, minute: 13})).toBe('07:13'));
it('formats 11 hours and 3 minutes to 11:03', () => expect(formatTime({hour: 11, minute: 3})).toBe('11:03'));
it('formats 7 to 07', () => expect(formatTimeUnit(7)).toBe('07'));
it('formats 12 to 12', () => expect(formatTimeUnit(12)).toBe('12'));