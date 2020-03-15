import {mount, ReactWrapper} from 'enzyme';
import TaskCreator from '../../components/TaskCreator';
import * as React from 'react';
import {getTasks} from '../../storage';

it('creates a task', () => {
    const wrapper = mount(<TaskCreator/>);
    const task = 'My task';
    const duration = 30;
    submitForm(wrapper, task, duration);
    checkStorage(task, duration);
});

function submitForm(
    wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
    task: string,
    duration: number
): void {
    const taskInput = wrapper.find('input').at(0);
    taskInput.simulate('change', {target: {value: task}});
    const durationInput = wrapper.find('input').at(1);
    durationInput.simulate('change', {target: {value: duration.toString()}});
    const submit = wrapper.find('button').at(0);
    submit.simulate('click');
}

function checkStorage(task: string, duration: number): void {
    const taskData = getTasks()[0];
    expect(taskData.task).toBe(task);
    expect(taskData.duration).toBe(duration);
}