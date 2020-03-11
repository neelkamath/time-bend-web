import {mount, ReactWrapper} from 'enzyme';
import TimeBar from '../../../ts/components/time_bar/TimeBar';
import * as React from 'react';
import getReserveTime from '../../../ts/reserveTime';
import {saveDayTimes} from '../../../ts/storage';
import {Time} from '../../../ts/timeFormatter';

test('correctly updates the reserve time', () => {
    saveDayTimes({dayStart: {hour: 5, minute: 45}, dayEnd: {hour: 21, minute: 30}});
    const wrapper = mount(<TimeBar/>);
    const oldReserve = getReserveTime();
    testReserve(wrapper, oldReserve);
    wrapper.find('input').at(1).simulate('change', {target: {value: '19:45'}});
    const newReserve = getReserveTime();
    expect(newReserve).not.toBe(oldReserve);
    testReserve(wrapper, newReserve);
});

function testReserve(wrapper: ReactWrapper, reserve: Time): void {
    expect(wrapper.find('ReserveTime').at(0).props()).toEqual(reserve);
}