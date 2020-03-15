import {mount, ReactWrapper} from 'enzyme';
import TimeBar from '../../components/TimeBar';
import * as React from 'react';
import getReserveTime from '../../reserveTime';
import {saveDayTimes} from '../../storage';
import {Time} from '../../timeFormatter';

it('correctly updates the reserve time', () => {
    saveDayTimes({dayStart: {hour: 5, minute: 45}, dayEnd: {hour: 21, minute: 30}});
    const wrapper = mount(<TimeBar/>);
    const oldReserve = getReserveTime();
    testReserve(wrapper, oldReserve);
    const dayEnd = wrapper.find('input').at(1);
    dayEnd.simulate('change', {target: {value: '19:45'}});
    const newReserve = getReserveTime();
    expect(newReserve).not.toBe(oldReserve);
    testReserve(wrapper, newReserve);
});

function testReserve(wrapper: ReactWrapper, reserve: Time): void {
    expect(wrapper.find('ReserveTime').at(0).props()).toEqual(reserve);
}