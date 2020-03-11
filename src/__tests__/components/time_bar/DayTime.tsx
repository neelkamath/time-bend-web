import {DayTime} from '../../../ts/components/time_bar/DayTime';
import React from 'react';
import {shallow} from 'enzyme';

test('updates the time', () => {
    const onUpdate = () => {
    };
    const wrapper = shallow(<DayTime isStart={true} onUpdate={onUpdate}/>);
    const time = '13:45';
    wrapper.find('input').at(0).simulate('change', {target: {value: time}});
    expect(wrapper.find('input').at(0).props().value).toBe(time);
});