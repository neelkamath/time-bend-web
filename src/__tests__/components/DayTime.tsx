import DayTime from '../../components/DayTime';
import React from 'react';
import {mount} from 'enzyme';

it('updates the time', () => {
    const onUpdate = () => {
    };
    const wrapper = mount(<DayTime isStart={true} onUpdate={onUpdate}/>);
    const time = '13:45';
    const getInput = () => wrapper.find('input').at(0);
    getInput().simulate('change', {target: {value: time}});
    expect(getInput().props().value).toBe(time);
});